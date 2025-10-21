#!/usr/bin/env node

import { removeDfinityDependencies } from "../../scripts/edit-package-json.mjs";

await removeDfinityDependencies()