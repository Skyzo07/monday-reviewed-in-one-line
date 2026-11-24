// Monday, Reviewed in One Line — u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// Writes the winning one-line Monday review to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My Monday in one line: 9 a.m. meeting, 10 a.m. meeting about the 9 a.m. meeting, 11 a.m. regretting both.";

// Runtime guard: the gate requires UTF-8 text of 1–200 characters, a single
// line, and not only whitespace. Fail loudly instead of writing a bad entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
