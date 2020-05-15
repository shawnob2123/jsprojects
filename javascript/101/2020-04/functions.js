function gold(oweight) {
    console.log(`You have selected GOLD`);
    console.log(`Your total cost = ${oweight * 12.5} `);
}
 

function silver(oweight) {
    console.log(`You have selected SILVER`);
    console.log(`Your total cost = ${oweight * 14.07}`);
}

let ounces = 5;

    silver(ounces); //CALLS the silver FUNCTION
    gold(ounces); //CALLS the gold FUNCTION



