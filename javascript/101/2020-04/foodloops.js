let dinnerFood = ["Steak", "Chicken", "Beef", "Soup"];
let dinnerTime = [600, 730, 800, 900];


for (let i = 0; i < dinnerFood.length; i++) {
    if (dinnerTime[i] < 800){
        console.log(`I am eating a full meal of ${dinnerFood[i]} at ${dinnerTime[i]}`);
    }
    else if (dinnerTime[i] < 900) {
        console.log(`I am eating a half meal of ${dinnerFood[i]} at ${dinnerTime[i]}`);
    }

    else  {
        console.log(`I will not eat ${dinnerFood[i]} at ${dinnerTime[i]}`);
    }
}
