let teacherName = ["Mrs.Ross", "Mrs.Tobin", "Mr.Guy", "Mr.Walsh"];
let grade = [1, 2, 3, 5];

for (let i = 0; i < teacherName.length; i++) {
    if (grade[i] >= 3) {
        console.log(`${teacherName[i]} teaches older students`);
    }
    else if (grade[i] < 3) 
        console.log(`${teacherName[i]} teaches younger students`); 
}
