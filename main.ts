import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Tournament winner: the last word reveals what the agent never had.
const entry = "Agent's first payday bought one memory.";

if (entry.length > 60 || !/^\S+( \S+){5}$/.test(entry)) {
  throw new Error("entry violates the six-word, 60-character form");
}

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
