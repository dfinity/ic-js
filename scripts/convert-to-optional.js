const babel = require("@babel/core");
const fs = require("fs");
const path = require("path");

/**
 * Identifies the `[] | [T]` pattern
 */
const isOptionalUnionType = (annotation) => {
  if (annotation.typeAnnotation.type === "TSUnionType") {
    const types = annotation.typeAnnotation.types;
    const hasEmptyTuple = types.some(
      (type) => type.type === "TSTupleType" && type.elementTypes.length === 0
    );
    const hasOneElementTyple = types.some(
      (type) => type.type === "TSTupleType" && type.elementTypes.length === 1
    );
    return types.length === 2 && hasEmptyTuple && hasOneElementTyple;
  }
};

const EXTERNAL_TYPES = ["Principal", "Uint8Array"];

const mappedInterfaces = new Map();

const transformOptionalTuple = () => {
  return {
    visitor: {
      TSInterfaceDeclaration: (path) => {
        const name = path.node.id.name;
        if (name.startsWith("Optional") || name.startsWith("_")) {
          return;
        }
        const t = babel.types;
        const convertTypeToOptional = (node) => {
          if (node.elementTypes.length === 0) {
            return t.tsUndefinedKeyword();
          }
          if (node.elementTypes.length === 1) {
            return node.elementTypes[0];
          }
          throw new Error(`Unexpected tuple type ${JSON.stringify(node)}`);
        };
        const convertNode = (node) => {
          const annotation = node.typeAnnotation;
          if (isOptionalUnionType(annotation)) {
            return t.tsPropertySignature(
              node.key,
              t.tsTypeAnnotation(
                t.tsUnionType(
                  annotation.typeAnnotation.types.map(convertTypeToOptional)
                )
              )
            );
          }
          return node;
        };
        const interfaceName = path.node.id.name;
        const newInterfaceName = `Optional${interfaceName}`;
        const newIdentitifer = t.identifier(newInterfaceName);
        const newBody = path.node.body.body.map(convertNode);
        const newInterface = t.tsInterfaceDeclaration(
          newIdentitifer,
          null,
          [],
          t.tSInterfaceBody(newBody)
        );

        const parameterName =
          interfaceName.charAt(0).toLowerCase() + interfaceName.slice(1);
        const parameter = t.identifier(parameterName);
        parameter.typeAnnotation = t.tsTypeAnnotation(
          t.tsUnionType([
            t.tsTypeReference(t.identifier(interfaceName)),
            t.tsUndefinedKeyword(),
          ])
        );
        const transformProp = (node) => {
          const annotation = node.typeAnnotation;
          if (isOptionalUnionType(annotation)) {
            const call = t.callExpression(t.identifier("fromNullable"), [
              t.memberExpression(parameter, node.key),
            ]);
            const referenceTypes = annotation.typeAnnotation.types
              .filter(
                (type) =>
                  type.type === "TSTupleType" && type.elementTypes.length === 1
              )
              .map((type) => type.elementTypes[0])
              .filter((type) => type.type === "TSTypeReference")
              .map((type) => type.typeName.name);
            if (referenceTypes.length > 1) {
              throw new Error(
                `Unexpected number of type annotations for union type ${JSON.stringify(
                  annotation
                )}`
              );
            }
            if (referenceTypes.length === 0) {
              return t.objectProperty(node.key, call);
            }
            const referenceType = referenceTypes[0];
            if (
              referenceType[0].toUpperCase() === referenceType[0] &&
              !EXTERNAL_TYPES.includes(referenceType)
            ) {
              const converterCallExpression = t.callExpression(
                t.identifier(`convert${referenceType}`),
                [call]
              );
              return t.objectProperty(node.key, converterCallExpression);
            }
            return t.objectProperty(node.key, call);
          }
          return t.objectProperty(
            node.key,
            t.memberExpression(parameter, node.key)
          );
        };
        const returnObject = t.objectExpression(
          path.node.body.body.map(transformProp)
        );
        const ternaryStatement = t.conditionalExpression(
          t.binaryExpression(
            "===",
            t.identifier(parameterName),
            t.identifier("undefined")
          ),
          t.identifier("undefined"),
          returnObject
        );
        const returnStatement = t.returnStatement(ternaryStatement);
        const newFunction = t.functionDeclaration(
          t.identifier(`convert${interfaceName}`),
          [parameter],
          t.blockStatement([returnStatement])
        );
        newFunction.returnType = t.tsTypeAnnotation(
          t.tsUnionType([
            t.tsTypeReference(newIdentitifer),
            t.tsUndefinedKeyword(),
          ])
        );
        const exportStatement = t.exportNamedDeclaration(newFunction);

        mappedInterfaces.set(interfaceName, newInterfaceName);
        path.insertAfter(exportStatement);
        path.replaceWith(newInterface);
      },
    },
  };
};

/**
 * Identifies the `undefined | T` pattern
 */
const isOptionalType = (annotation) => {
  if (annotation.typeAnnotation.type === "TSUnionType") {
    const types = annotation.typeAnnotation.types;
    const hasUndefined = types.some(
      (type) => type.type === "TSUndefinedKeyword"
    );
    const hasOneElementTyple = types.some(
      (type) => type.type === "TSTypeReference"
    );
    return types.length === 2 && hasUndefined && hasOneElementTyple;
  }
};

const hasPendingTypeConvert = (annotation) => {
  if (annotation.typeAnnotation.type === "TSUnionType") {
    const types = annotation.typeAnnotation.types;
    const hasMappedType = types.some(
      (type) =>
        type.type === "TSTypeReference" &&
        mappedInterfaces.has(type.typeName.name)
    );
    return types.length === 2 && hasMappedType;
  }
};

const transformInterfacesToOptional = () => {
  return {
    visitor: {
      TSPropertySignature: (path) => {
        const { typeAnnotation } = path.node;
        if (typeAnnotation.typeAnnotation.type === "TSUnionType") {
          const t = babel.types;
          if (
            isOptionalType(typeAnnotation) &&
            hasPendingTypeConvert(typeAnnotation)
          ) {
            const renameIfOptional = (node) => {
              if (node.type === "TSTypeReference") {
                return t.tsTypeReference(
                  t.identifier(mappedInterfaces.get(node.typeName.name))
                );
              }
              return node;
            };
            const newNode = t.tsPropertySignature(
              path.node.key,
              t.tsTypeAnnotation(
                t.tsUnionType(
                  typeAnnotation.typeAnnotation.types.map(renameIfOptional)
                )
              )
            );
            path.replaceWith(newNode);
          }
        }
      },
    },
  };
};

/**
 * Create helpers that transform `[T] | []` to `T | undefined`
 *
 * @param {string} file
 */
const createHelpersFor = (file) => {
  const content = fs.readFileSync(file, "utf-8");
  const originalAst = babel.parseSync(content, {
    plugins: ["@babel/plugin-syntax-typescript"],
  });
  const { code, ast } = babel.transformFromAstSync(originalAst, content, {
    plugins: [transformOptionalTuple],
    ast: true,
  });
  const { code: code2 } = babel.transformFromAstSync(ast, code, {
    plugins: [transformInterfacesToOptional],
  });
  const fromNullableImport = `import { fromNullable } from "@dfinity/utils";`;
  const typeImports = `import {\n  ${Array.from(mappedInterfaces.keys()).join(
    ",\n  "
  )}\n} from "./sns_governance";`;
  const codeWithImports = `${fromNullableImport}\n${typeImports}\n${code2}`;

  fs.writeFileSync(
    path.join(".", "./packages/sns/candid/sns_governance-converters.ts"),
    codeWithImports,
    "utf-8"
  );
};

createHelpersFor("./packages/sns/candid/sns_governance.d.ts");
