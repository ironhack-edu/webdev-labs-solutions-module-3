const fs = require("fs");

// Read the JSON file
const rawData = fs.readFileSync("./src/technologies.json");
const technologies = JSON.parse(rawData);

// Sort the technologies by name
technologies.sort((a, b) => a.name.localeCompare(b.name));

// Write the sorted array to a new file
fs.writeFileSync(
  "technologies-sorted.json",
  JSON.stringify(technologies, null, 2)
);

console.log("Sorting completed. Output saved to technologies-sorted.json.");
