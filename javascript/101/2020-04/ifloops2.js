function classGrades(grades) {
    var result = "";

    if (grades < 65){
        result = "Fail";
    }

     else if (grades => 65){
    result = "Pass";
     }


return result;
}

console.log(classGrades(62));

// new code

function teacherNote(note) {
    var result = "";

    if (note < 65){
        result = "Please Study";
    }

        else if (note => 65){
        result = "Great Work!";
        }
    
return result;

}
console.log(teacherNote(62));