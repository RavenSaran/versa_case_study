const fs = require("fs");
const path = require("path");
const os = require("os");

function generateBigBangArray(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIG BANG");
        } else if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

function writeToJsonFile(data, filePath) {
    try {
        const jsonData = JSON.stringify(data, null, 2);

        fs.writeFileSync(filePath, jsonData);

        console.log("✅ File saved successfully!");
    } catch (error) {
        console.error(error);
    }
}

function printToConsole(data) {
    console.log("\n=== BIG BANG OUTPUT ===");

    data.forEach(item => {
        process.stdout.write(item + " ");
    });

    console.log("\n");
}

// MAIN
const result = generateBigBangArray(1, 100);

printToConsole(result);

// 🔥 FORCE SAVE TO DESKTOP/case_study_versa
const desktopPath = path.join(
    os.homedir(),
    "Desktop",
    "case_study_versa"
);

// create folder if not exists
if (!fs.existsSync(desktopPath)) {
    fs.mkdirSync(desktopPath, { recursive: true });
}

const filePath = path.join(desktopPath, "output.json");

writeToJsonFile(result, filePath);

console.log("📁 Saved at:", filePath);