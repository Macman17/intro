function workers( solution,people){
    
    let count = 0;
    for (let i  = 0; i   < people.length; i++) { 
        let num= people[i];
         if (num < solution) {
             count += 1;
            
            
         }
    
    }
    console.log("You have",count," full-time employees with an ID below", solution);
    
}






function init() {
    console.log("Page Loaded")
    // Full time employees have an ID number 5 below 
    let people = [101,102,103,104,105,106,107,108,109,110];
    workers(106,people);
}
window.onload = init;