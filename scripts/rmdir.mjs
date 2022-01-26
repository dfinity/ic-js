#!/usr/bin/env node

import { rmSync, existsSync } from "fs";
import { join } from "path";

const rmDir = () => {
  const dir = join(process.cwd(), "dist");

  if (!existsSync(dir)) {
    return;
  }

  rmSync(dir, { recursive: true });
};

rmDir();
