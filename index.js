
function superbowlWin(records) {
  // Use find() to locate the first record with result "W"
  const winRecord = records.find((record) => record.result === "W");

  // If a win was found, return the year, otherwise undefined
  return winRecord ? winRecord.year : undefined;
}

// Example usage:
const seasons = [
  { year: "2015", result: "L" },
  { year: "2016", result: "W" },
  { year: "2017", result: "L" },
];

console.log(superbowlWin(seasons)); // Output: "2016"
