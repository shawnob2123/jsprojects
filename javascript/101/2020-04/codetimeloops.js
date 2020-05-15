let codeCourse = ["Javascript", "CSS", "React", "Angular", "Node"];
let codeTime = [800, 1000, 300, 700, 900];


for (let i = 0; i < codeTime.length; i++) {
    if (codeTime[i] > 700) {
        console.log(`Practice more ${codeCourse[i]} tonight`);
    }
    else if (codeTime[i] < 700) 
        console.log(`Go to bed then learn ${codeCourse[i]} in the morning`);  
        
    else 
        console.log(`Practice ${codeCourse[i]} now`);
    }
    
