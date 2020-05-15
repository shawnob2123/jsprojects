let players = [];

function addPlayer() {

    if(Boolean(localStorage.getItem('lsPlayers'))) {
        let players = JSON.parse(localStorage.getItem('lsPlayers'));

        let newPlayer = document.getElementById('inputBox').value;
        let newPosition = document.getElementById('inputBox2').value;
        players.push(newPlayer);
        players.push(newPosition);

        localStorage.setItem('lsPlayers', JSON.stringify(players));

        let liveLineup = JSON.parse(localStorage.getItem('lsPlayers'));
        console.log(liveLineup);

        let startingRosterList = `<ul>`;
        for (let i = 0; i < liveLineup.length; i++) {
            startingRosterList = startingRosterList + `<li>${liveLineup[i]}</li>`;
        }

        startingRosterList = startingRosterList + `</ul>`
        document.getElementById('startingPlayers').innerHTML = startingRosterList;


    }else {

        let newPlayer = document.getElementById('inputBox').value;
        let newPosition = document.getElementById('inputBox2').value;
        players.push(newPlayer);
        players.push(newPosition);

        localStorage.setItem('lsPlayers', JSON.stringify(players));

        let liveLineup = JSON.parse(localStorage.getItem('lsPlayers'));
        console.log(liveLineup);

        let startingRosterList = `<ul>`;
        for (let i = 0; i < liveLineup.length; i++) {
            startingRosterList = startingRosterList + `<li>${liveLineup[i]}</li>`;
        }

        startingRosterList = startingRosterList + `</ul>`;
        document.getElementById('startingPlayers').innerHTML = startingRosterList;


    }
}

let liveLineup = JSON.parse(localStorage.getItem('lsPlayers'));

let startingRosterList = `<ul>`;

for (let i = 0; i < liveLineup.length; i++) {
    startingRosterList = startingRosterList + `${liveLineup[i]}`;
}

startingRosterList = startingRosterList + `</ul>`;
document.getElementById('startingPlayers').innerHTML = startingRosterList;

    
