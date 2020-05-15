//sub array in a nested for loop
let names = [['Johnathan', 'Arnell', 'Shawn', 'Jean'], ['Bobby', 'Margie', 'Chelsea', 'Jamie']];
let cohorts = ['cohort11b', 'cohort11a']; 


for (let i = 0; i < names.length; i++) {
console.log(cohorts[i]); 

//names.length = 2 sub arrays
for (let j = 0; j < names[i].length; j++) {
   
    console.log(names[i][j]);
    
}

}
   





//only print 11b cohort above names
//only print 11a cohort above names