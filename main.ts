// The X post URL to be scored lives in POST.json ({"url": ...}) and is copied to the output dir unchanged.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

try {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const source = join(botDir, "POST.json");
  const target = join(outDir, "POST.json");
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
}
// graded by make.fun sandbox
