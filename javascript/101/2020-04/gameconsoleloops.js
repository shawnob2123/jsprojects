let gameConsole = ["PS4", "Xbox 360", "Gamecube", "Nintendo", "PS2"];
let yearReleaseDate = [2013, 2007, 2003, 1997, 2001];

for (let i = 0; i < gameConsole.length; i++) {
    if (yearReleaseDate[i] > 2005) {
        console.log(`The ${gameConsole[i]} is more recent than any other gaming console`);
    }
    else if (yearReleaseDate[i] < 2002) {
        console.log(`The ${gameConsole[i]} is a dinosaur`);
    }
    else {
        console.log(`The ${gameConsole[i]} had the most players at one point`);
    }
}