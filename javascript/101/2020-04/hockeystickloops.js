let hockeyStickType = ["Bauer", "Sherwood", "CCM", "Warrior"];
let stickCurve = ["P92", "P88", "P90" ,"P86"];
let stickPrice = [40, 60, 85, 110];
let budget = 95;

for (let i = 0; i < hockeyStickType.length; i++) {
    if (stickPrice[i] > budget) {  //if 40,60,85,110 is greater than the budget 95, print console log
        console.log(`Without a coupon, ${hockeyStickType[i]} sticks with a ${stickCurve[i]} curve, start at $${stickPrice[i]}`);
    }
    else if (stickPrice[i] < budget)  //if 40,60,85,110 is less than budget 95, print console log
        console.log(`With a coupon, ${hockeyStickType[i]} sticks with a ${stickCurve[i]} curve, start at $${stickPrice[i]}`);

}
