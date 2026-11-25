import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? I ask because that's also my entire plan for the rest of this call.";

if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
