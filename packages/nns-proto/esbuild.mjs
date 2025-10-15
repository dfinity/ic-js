#!/usr/bin/env node

import { build } from "../../scripts/esbuild.mjs";

build({ multi: false, nodeFormat: "cjs" });
