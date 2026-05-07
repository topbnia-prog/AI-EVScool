import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skippedDirectories = new Set(["node_modules", ".next", ".git", ".vercel"]);
const checkedExtensions = new Set([".ts", ".tsx", ".css", ".md", ".json", ".sql", ".txt"]);
const privateNamePatterns = [
  "Daniel",
  "daniel",
  "Anton",
  "top.bnia",
  "gmail",
  String.fromCodePoint(0x05d3, 0x05e0, 0x05d9, 0x05d0, 0x05dc),
  String.fromCodePoint(0x0414, 0x0430, 0x043d, 0x0438, 0x044d, 0x043b, 0x044c),
  String.fromCodePoint(0x0410, 0x043d, 0x0442, 0x043e, 0x043d),
  String.fromCodePoint(0x043f, 0x043b, 0x0435, 0x043c, 0x044f, 0x043d)
];
const brokenCodepoints = new Set([0x05c0, 0x05b2, 0xfffd]);
const issues = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (skippedDirectories.has(entry.name)) {
      continue;
    }

    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(filePath);
      continue;
    }

    if (entry.name.startsWith("check-") && entry.name.endsWith(".png")) {
      issues.push({ type: "temporary-screenshot", filePath });
    }

    if (!checkedExtensions.has(path.extname(entry.name))) {
      continue;
    }

    const content = fs.readFileSync(filePath, "utf8");
    const lowered = content.toLowerCase();

    for (const pattern of privateNamePatterns) {
      if (lowered.includes(pattern.toLowerCase())) {
        issues.push({ type: "private-pattern", pattern, filePath });
      }
    }

    for (let index = 0; index < content.length; index += 1) {
      if (brokenCodepoints.has(content.codePointAt(index))) {
        issues.push({ type: "broken-codepoint", filePath, index });
        break;
      }
    }
  }
}

walk(root);

if (issues.length > 0) {
  console.error(JSON.stringify(issues, null, 2));
  process.exit(1);
}

console.log("Public project privacy and encoding scan passed.");
