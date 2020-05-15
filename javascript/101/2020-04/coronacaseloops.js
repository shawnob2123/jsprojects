let coronaCountry = ["USA", "China", "Canada", "Mexico", "Ireland"];
let totalCountryCases = [10000, 50000, 1000, 300, 100];
let totalPatientsHospitalized = [500, 1000, 15000, 100, 350];
let hospitalMaximumCapacity = 1000;

for (let i = 0; i < coronaCountry.length; i++){
    if(totalPatientsHospitalized[i] < hospitalMaximumCapacity ){
        console.log(`We have ${totalCountryCases[i]} cases in ${coronaCountry[i]} with ${totalPatientsHospitalized[i]} hospitalized`);
      
    }

    else (totalPatientsHospitalized[i] >= hospitalMaximumCapacity)
    console.log(`We cannot have more than ${hospitalMaximumCapacity} people in our hospitals in ${coronaCountry[i]}`);
      
      
       
}