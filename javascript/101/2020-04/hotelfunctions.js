function hotelFunction(guest, room, status, lengthStay) {
    
    floorLevel = room[0];
    floorLevel = parseInt(floorLevel, 10);
    let floorMultiple = 50;
    let floorPriceMultiple = (floorLevel - 1) * floorMultiple;
    roomCost = roomCost + floorPriceMultiple;
​
​
    console.log(`Congratulations ${guest}, you are checked ${status}. `);
    console.log(`Your room # is ${room} on level ${floorLevel}, and costs $${roomCost} / night.  Your total cost is $${roomCost * lengthStay} for ${lengthStay} nights.`);
}
​
let roomCost = 250;
​
hotelFunction(`Jonathan Rosales`, `733`, `In`, 8);
