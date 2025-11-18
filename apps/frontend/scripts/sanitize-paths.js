const fs = require("fs");
const path = require("path");

const baseDir = "src/components/cms";

function sanitize(name) {
    return name.replace(/[:<>|?*"\\/]/g, "_");
}

function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, item);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            const safeName = sanitize(item);
            const newPath = path.join(dir, safeName);
            if (safeName !== item) {
                fs.renameSync(fullPath, newPath);
                console.log(`Renamed: ${item} → ${safeName}`);
            }
            walk(newPath);
        }
    }
}

walk(baseDir);
