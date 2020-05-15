let exercises = ["Situps", "Pushups", "Bicep Curls", "Pullups"];
let totalReps = [8, 10, 12, 15];

for (let i = 0; i < exercises.length; i++) {
    if (totalReps[i] > 8) {
        console.log(`Do ${totalReps[i]} reps of ${exercises[i]}`);
 }

 else if (totalReps[i] <= 8) {
     console.log(`Do ${totalReps[i]} reps of ${exercises[i]} then walk 5 minutes`);
 }
}