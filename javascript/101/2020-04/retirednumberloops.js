let retiredName = ["Gretzky", "Howe", "Lidstrom", "Yzerman"];
let retiredNumbers = [99, 9, 5, 19];

for (let i = 0; i< retiredName.length; i++) {
    if (retiredNumbers[i] > 50) {
        console.log(`No team can wear ${retiredNumbers[i]} ever again`);
    }
    else if (retiredNumbers[i] < 50)
        console.log(`No team can wear ${retiredNumbers[i]} because of ${retiredName[i]}`);
}