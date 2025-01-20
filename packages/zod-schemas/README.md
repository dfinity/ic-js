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

`utils-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [createUrlSchema](#gear-createurlschema)

#### :gear: createUrlSchema

| Function          | Type                                                                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createUrlSchema` | `({ additionalProtocols, allowHttpLocally, }: { additionalProtocols?: `${string}:`[] or undefined; allowHttpLocally?: boolean or undefined; }) => ZodEffects<ZodString, string, string>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/zod-schemas/src/url.ts#L5)

### :wrench: Constants

- [UrlSchema](#gear-urlschema)

#### :gear: UrlSchema

| Constant    | Type                                    |
| ----------- | --------------------------------------- |
| `UrlSchema` | `ZodEffects<ZodString, string, string>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/zod-schemas/src/url.ts#L38)

<!-- TSDOC_END -->
