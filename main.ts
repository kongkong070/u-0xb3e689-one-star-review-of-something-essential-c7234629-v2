// One-star review of an everyday essential: gravity.
// Deadpan complaint, filed in earnest against a force that cannot be fixed.
// Writes a single one-line review to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. Gravity never takes a day off, except when my toast lands butter-side down — then it works double shifts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
