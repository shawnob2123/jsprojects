let stanleyCupTeams = ["Redwings", "Bruins", "Capitals", "Islanders", "Penguins"];
let stanleyCupWins = [11, 3, 1, 4, 6];

for (let i = 0; i < stanleyCupTeams.length; i++) {
    if (stanleyCupWins[i] < 5) {
        console.log(`The ${stanleyCupTeams[i]} are awful`);
    }
     else if (stanleyCupWins[i] > 7) {
        console.log(`The ${stanleyCupTeams[i]} are a great team`);

    }
    else {
        console.log(`${stanleyCupTeams[i]} need more rings`);
    }
    }
