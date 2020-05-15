let software = [];

function addSoftware() {
    if(Boolean(localStorage.getItem('lsFramework'))) {
        let software = JSON.parse(localStorage.getItem('lsFramework'));

        let newSoftware = document.getElementById('inputBox').value;
        
        software.push(newSoftware);
        

        localStorage.setItem('lsFramework', JSON.stringify(software));

        let liveFramework = JSON.parse(localStorage.getItem('lsFramework'));
        console.log(liveFramework);

        let softwareList = `<ul>`;
        for (let i = 0; i < softwareList.length; i++) {
            softwareList = softwareList + `<li>${softwareList[i]}</li>`;
        }

        softwareList = softwareList + `</ul>`
        document.getElementById('newFramework').innerHTML = softwareList;


    }else {
        let newSoftware = document.getElementById('inputBox').value;
        
        software.push(newSoftware);
        

        localStorage.setItem('lsFramework', JSON.stringify(software));

        let liveFramework = JSON.parse(localStorage.getItem('lsFramework'));
        console.log(liveFramework);

        let softwareList = `<ul>`;
        for (let i = 0; i < softwareList.length; i++) {
            softwareList = softwareList + `<li>${softwareList[i]}</li>`;
        }

        softwareList = softwareList + `</ul>`
        document.getElementById('newFramework').innerHTML = softwareList;

    }
}

let liveFramework = JSON.parse(localStorage.getItem('lsFramework'));
        console.log(liveFramework);

        let softwareList = `<ul>`;
        for (let i = 0; i < softwareList.length; i++) {
            softwareList = softwareList + `<li>${softwareList[i]}</li>`;
        }

        softwareList = softwareList + `</ul>`
        document.getElementById('newFramework').innerHTML = softwareList;

    



        