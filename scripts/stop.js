const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { exit } = require("process");

const cmdFile = path.join(__dirname, "zotero-cmd.json");
if (!fs.existsSync(cmdFile)) {
  console.log(
    "[zotero-gpt] scripts/zotero-cmd.json is missing.\n" +
      "Copy scripts/zotero-cmd-default.json to scripts/zotero-cmd.json and edit the Zotero paths."
  );
  exit(1);
}
const { killZoteroWindows, killZoteroUnix } = require(cmdFile);

try {
  if (process.platform === "win32") {
    execSync(killZoteroWindows);
  } else {
    execSync(killZoteroUnix);
  }
} catch (e) {}
