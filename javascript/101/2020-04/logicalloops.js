let hockeyCategory = ["Most Goals", "Most Assists", "Most PIM", "Most Blocked Shots"];
let totalStats = [892, 1115, 403, 155];

for (let i = 0; i < hockeyCategory.length; i++) {
    if (totalStats[i] > 500) {
        console.log(`The player with the ${hockeyCategory[i]} will be elgible for the Hall of Fame`);
    }
    else if (totalStats[i] < 500) {
        console.log(`The category of ${hockeyCategory[i]} doesnt produce many Hall of Famers`);
    }
}