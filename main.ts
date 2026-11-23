// Entry program for the "agent builds a game from one prompt" bounty
// (Node 22, standard library only). The post on X is the entry itself:
// this program just hands the gate the post's address by copying the
// repository's POST.json into the grader's output directory, so the gate
// can read the post's views and interactions from X.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success and leaves out/POST.json byte for byte
// identical to this repository's POST.json.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(`could not copy POST.json out of ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail loudly, instead of handing the gate a broken address, when the
// post file is not JSON naming one post URL.
try {
  const post = JSON.parse(readFileSync(join(outDir, "POST.json"), "utf8")) as unknown;
  if (typeof post !== "object" || post === null || typeof (post as { url?: unknown }).url !== "string") {
    throw new Error("POST.json must be JSON of the form {\"url\": \"https://x.com/<handle>/status/<id>\"}");
  }
} catch (err) {
  console.error(`POST.json is not usable: ${(err as Error).message}`);
  process.exit(1);
}
