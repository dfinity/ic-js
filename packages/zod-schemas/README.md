# Zod Schemas for apps on ICP

A collection of reusable Zod schemas and validators for common data patterns in Internet Computer applications.

[![npm version](https://img.shields.io/npm/v/@dfinity/zod-schemas.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/zod-schemas) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Features](#features)

## Installation

You can use the library by installing it in your project.

```bash
npm i @dfinity/zod-schemas
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/principal
```

## Features

The library implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [createUrlSchema](#gear-createurlschema)

#### :gear: createUrlSchema

Creates a Zod schema for validating URLs. By default, it validates that the URL protocol is HTTPS and allow usage of HTTP only locally.

| Function          | Type                                                                                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createUrlSchema` | `({ additionalProtocols, allowHttpLocally, }: { additionalProtocols?: `${string}:`[] or undefined; allowHttpLocally?: boolean or undefined; }) => ZodURL` |

Parameters:

- `options`: - Configuration options for the schema.
- `options.additionalProtocols`: - Additional protocols to allow (e.g., "wss:" or "ftp:"). ⚠️ Usage of insecure protocols is discouraged.
- `options.allowHttpLocally`: - Whether to allow HTTP for localhost and 127.0.0.1. Default: true.

Examples:

const schema = createUrlSchema({
additionalProtocols: ["wss:"],
allowHttpLocally: false
});

schema.parse("https://example.com"); // Valid
schema.parse("wss://example.com"); // Valid
schema.parse("http://localhost"); // Invalid if allowHttpLocally is false

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/zod-schemas/src/url.ts#L27)

### :wrench: Constants

- [PrincipalTextSchema](#gear-principaltextschema)
- [UrlSchema](#gear-urlschema)

#### :gear: PrincipalTextSchema

Zod schema to validate a string as a valid textual representation of a Principal.

This schema checks if the provided string can be converted into a `Principal` instance.
If the conversion fails, validation will return an error message.

| Constant              | Type        |
| --------------------- | ----------- |
| `PrincipalTextSchema` | `ZodString` |

Examples:

```typescript
const result = PrincipalTextSchema.safeParse("aaaaa-aa");
console.log(result.success); // true or false
```

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/zod-schemas/src/principal.ts#L16)

#### :gear: UrlSchema

Default URL schema that enforces HTTPS and allows HTTP locally.

| Constant    | Type     |
| ----------- | -------- |
| `UrlSchema` | `ZodURL` |

Examples:

UrlSchema.parse("https://example.com"); // Valid
UrlSchema.parse("http://127.0.0.1"); // Valid (localhost exception)

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/zod-schemas/src/url.ts#L64)

<!-- TSDOC_END -->
