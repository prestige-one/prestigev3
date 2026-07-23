const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const nextDir = path.join(projectRoot, ".next");

function removeNextDir(reason) {
  if (!fs.existsSync(nextDir)) return;
  console.log(reason);
  fs.rmSync(nextDir, {
    recursive: true,
    force: true,
    maxRetries: 5,
    retryDelay: 200,
  });
}

// OneDrive breaks Next.js symlinks/junctions under .next (EINVAL on readlink).
// Always clear the cache before dev/build when the repo lives on OneDrive.
if (projectRoot.toLowerCase().includes("onedrive")) {
  removeNextDir("Clearing .next cache (OneDrive-safe dev startup)...");
  process.exit(0);
}

// Elsewhere: only clear when a known startup probe path is unreadable.
const probe = path.join(nextDir, "server", "interception-route-rewrite-manifest.js");

if (!fs.existsSync(probe)) {
  process.exit(0);
}

try {
  const stat = fs.lstatSync(probe);
  if (stat.isSymbolicLink()) {
    fs.readlinkSync(probe);
  } else {
    fs.readFileSync(probe);
  }
} catch {
  removeNextDir("Removing corrupted .next cache...");
}
