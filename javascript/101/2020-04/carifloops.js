let carRentals = ["Honda", "Acura", "Toyota", "Infiniti"];
let carRentalDailyPrice = [25, 50, 55, 60];
let carTotalRentals = [3, 6, 8, 10];
let budget = 7000;

for (let i = 0; i < carRentals.length; i++) {
    if (carRentalDailyPrice[i] > budget) {
        console.log(`Goal achieved: We rented out ${carTotalRentals[i]} ${carRentals[i]} cars to the school dance and made $${carTotalRentals[i]*carRentalDailyPrice[i]}.`); 
    }

    
}
