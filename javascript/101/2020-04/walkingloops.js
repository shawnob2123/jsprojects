let walkTypes = ["Run", "Light Walk", "HIIT", "Regular Walk"];
let walkTimes = [200, 500, 600, 550];

for (let i = 0; i < walkTypes.length; i++) {
    if (walkTimes[i] > 450) {
        console.log(`Do a ${walkTypes[i]} session for ${walkTimes[i]} minutes`);
    }
    else if (walkTimes[i] < 450) {
        console.log(`Do a ${walkTypes[i]} for longer than ${walkTimes[i]} minutes`);
    }
}