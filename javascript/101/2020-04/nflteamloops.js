let nflTeams = ["Steelers", "Patriots", "Rams", "Bengals"];
let teamWins = [14, 2, 6, 10];

for (let i = 0; i < nflTeams.length; i++) {
    if (teamWins[i] >= 9) {
        console.log(`The ${nflTeams[i]} are considered a great team`);
    }
    else if (teamWins[i] <= 8 && teamWins[i] >= 6) { //wins less or equal to 8 & wins greater than or equal to 6
        console.log(`The ${nflTeams[i]} are a medicore team`);
    }
    else {
        console.log(`The ${nflTeams[i]} are a bad team`);
        
    }
        
    
}