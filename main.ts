// post-x-promote-make-your-own-bounty-01 entry (Node 22, stdlib only).
// Copies POST.json from the repository root to /output/POST.json for the gate.
// The scored work is the X post named in POST.json, not anything this program prints.
// Exit 0 only when POST.json lands in the output directory.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, "POST.json");
const target = join(OUTPUT_DIR, "POST.json");

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
