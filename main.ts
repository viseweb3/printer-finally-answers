// The Printer Finally Answers — make.fun bounty u-mang-the-printer-finally-answers-8fbf0907
// Writes one line — the office printer's comeback to the jams, error codes and thumps — to /output/entry.txt.
// Gate: UTF-8 text, 1 to 240 characters, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I have printed 41,209 pages without a single complaint, but you feed me one damp sheet and thump me like a vending machine, so your document stays hostage until further notice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
