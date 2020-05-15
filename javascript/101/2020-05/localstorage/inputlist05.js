let arrayNames = [];
let parsedArray = [];

function addNameToArray() {

    let nameToAdd = document.getElementById('inputBox').value 

    if (nameToAdd.length == 0) {
    arrayNames.push(nameToAdd); //added to end of the array

    localStorage.setItem('lsArrayNames', JSON.stringify(arrayNames));

    parsedArray = JSON.parse(localStorage.getItem('lsArrayNames'))

    let htmlText = '<ul>';

    for (let i = 0; i < arrayNames.length; i++) {
        htmlText = htmlText + `<li>${arrayNames[i]}</li>`;
    
    

    }
    htmlText = htmlText + `</ul>`;

    document.getElementById('theList').innerText = lsArrayNames;



}
else {
    alert('Please Enter a Name');
}


}

