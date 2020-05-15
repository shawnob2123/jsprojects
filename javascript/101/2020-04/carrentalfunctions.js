//program will increase rental price by 1225 each day the car is rented plus the set rental amount


function carRental(color, car, type, doors, duration) {

    durationDayIncrease = parseInt(duration, 10);  //string 7 is now equal to 7
    let dayMultiple = 150;
    let dayPriceMultiple = (durationDayIncrease + 1) * dayMultiple; // 7 + 1 * 150 =dayPriceMultiple
    let durationPrice = 25;
    durationPrice = durationPrice + dayPriceMultiple; // 25= 25 + 1200

    console.log(`Rent a new ${color} ${car} ${type} with ${doors} doors for $${duration * durationPrice} per week.`);
    console.log(`After your one week with the ${color} ${car}, the price will increase $${durationPrice} daily. `);
}



carRental('Red', 'Lamborghini' , 'Aventador', '4', '7');