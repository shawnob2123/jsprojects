function mealTimes(time) {
    var result = "";
if (time < 10){
    result = "breakfast time";  
}
  
 else if (time <= 10) {
    result = "brunch time";
 }
    return result;
 
}
console.log(mealTimes(10));


