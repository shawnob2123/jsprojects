let startupName = ["Robinhood", "Stripe", "ToGoBox", "LUM"];
let ceoName = ["Baiju Bhatt", "Patrick Collison", "Taegon Lee", "Max Fergus"];
let startupValuation = [8000000, 10000000, 50000, 100000];
let capital = 500000;

for (let i = 0; i < startupName.length; i++) {
    if (startupValuation[i] > capital){
    console.log (`The CEO of ${startupName[i]} is ${ceoName[i]} and they are valued at $${startupValuation[i]} with $${capital} left of runway`);
}

else if (startupValuation[i] < capital)
    console.log(`${startupName[i]} is running out of money`);

}