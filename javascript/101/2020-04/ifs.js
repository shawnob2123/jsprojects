function workoutRoutine(routine){
        var result = "";

    if (routine > 3){
        result = " 3 sets";
    }

    else if (routine => 3){
        result = " 10 reps";
    }
return result;
}

console.log(workoutRoutine(2));

// new code

function totalSets(sets){
    var result = "";

    if (sets > 3){
        result = "pushups";
    }

    else if (sets <= 3){
        result = "pullups";
    }

    return result;
}

console.log(totalSets(4));