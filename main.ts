// The Meeting That Should Have Been an Email — make.fun entry.
// Writes one single-line joke to /output/entry.txt (UTF-8, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We booked a room, ordered lunch, and read an email out loud together.";

// Gate guard: the sealed scorer requires 1–200 characters, one line, not only whitespace.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("entry fails the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
