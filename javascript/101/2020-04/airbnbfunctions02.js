// We have the following arguments/data (totalSingleLevelHomesRented, totalDoubleLevelHomesRented, totalSingleCost, totalDoubleCost, singleLevelTax, doubleLevelTax)
// Calculate totalHomesRented, totalHomesRentedRevenue, totalSingleHomesRentedRevenue, totalDoubleHomesRentedRevenue, totalTax

function airBnb(totalSingleHomesLevelRented, totalDoubleLevelHomesRented, totalSingleCost, totalDoubleCost, singleLevelTax, doubleLevelTax) {
    let totalHomesRented = (totalSingleHomesLevelRented + totalDoubleLevelHomesRented);
    let totalSingleLevelHomesRentedRevenue = ((totalSingleHomesLevelRented * totalSingleCost));
    let totalDoubleLevelHomesRentedRevenue = ((totalDoubleLevelHomesRented * totalDoubleCost));
    let totalHomesRentedRevenue = (totalSingleLevelHomesRentedRevenue + totalDoubleLevelHomesRentedRevenue);
    let totalTax = ((totalSingleHomesLevelRented * singleLevelTax)+(totalDoubleLevelHomesRented * doubleLevelTax));
    console.log(`${totalHomesRented}`);
    console.log(`${totalSingleLevelHomesRentedRevenue}`);
    console.log(`${totalDoubleLevelHomesRentedRevenue}`);
    console.log(`${totalHomesRentedRevenue}`);
    console.log(`${totalTax}`);
    }
    airBnb(70000 ,80000 ,200 ,300 ,13 ,20);

    
