//let the program display how much Airbnb made in total from a 2 level home and single level home



function airBnb(totalNoCustomers, totalHomesRentedAllLevels, totalSingleLevelHomesRented) {
    let duration = 365; //days per year
    // let avgPerStay = 35; //in dollars per person
    let totalDoubleLevelHomesRented = totalHomesRentedAllLevels - totalSingleLevelHomesRented

    totalNoCustomers = parseInt(totalNoCustomers, 10);
    totalHomesRentedAllLevels = parseInt(totalHomesRentedAllLevels, 10);
    totalSingleLevelHomesRented = parseInt(totalSingleLevelHomesRented, 10);


    let singleLevelHome = 200; //per night 
    let doubleLevelHome = (singleLevelHome + 100); // $300 per night double level home
    let singleLevelHomeRevenue = (singleLevelHome * totalSingleLevelHomesRented * duration) 
    let doubleLevelHomeRevenue = (doubleLevelHome * totalDoubleLevelHomesRented * duration)
    let totalRevenue = singleLevelHomeRevenue + doubleLevelHomeRevenue;
   
    // console.log(`${totalNoCustomers / totalHomesRentedAllLevels * avgPerStay / duration}`);
    console.log(`Airbnb made $${totalRevenue} in total revenue from ${totalNoCustomers} customers for 2019`);
    console.log(`Single level homes made $${singleLevelHomeRevenue}`);
    console.log(`Double level homes made $${doubleLevelHomeRevenue}`);

}

airBnb('20000000', '150000', '70000');





