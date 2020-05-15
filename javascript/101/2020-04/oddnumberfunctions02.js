function oddNumbers(total) {
    console.log(`${total} is the total of sum of the odd numbers`)
}


let numbers = ["1","2","3","4", "5", "6", "7", "8"];
let total = 0;

for (i = 0; i < numbers.length; i++) {
  
    
    total = total + (parseInt(numbers[i], 10 ));
    i = i + 1;
    console.log(numbers[i]);
}

oddNumbers(total);
