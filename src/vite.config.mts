/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // you can also specify pool for a subset of files
    poolMatchGlobs: [["./test/stack.test.ts", "forks"]],
    // ... Specify options here.
  },
});
