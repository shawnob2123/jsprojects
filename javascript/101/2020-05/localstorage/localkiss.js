let routine = {
    workout: 'Curls', 'Dips', 'Press',
    sets: 4,
    day: 'Monday', 'Wednesday', 'Friday'
};

updateWorkoutRoutine: function () {

    document.getElementById('weeklyRoutine').innerHTML = 'Your Routine';

}

document.getElementById('name').innerText = routine.routineName

let routineString = localStorage.getItem('routine')

localStorage.getItem('routine')
routine = JSON.parse(routineString);

routine.updateWorkoutRoutine();
