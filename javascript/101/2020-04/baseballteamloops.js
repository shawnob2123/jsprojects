let baseballTeam = ["Redsox", "Yankees", "Cardinals", "Giants"];
let totalWorldSeries = [6, 26, 5, 3];

for (let i = 0; i < baseballTeam.length; i++) {
    if (totalWorldSeries[i] > 5) {
        console.log(`The ${baseballTeam[i]} are full of hall of famers`);
    }

    else if (totalWorldSeries[i] <= 5) 
        console.log(`The ${baseballTeam[i]} are full of bums`);
    }
