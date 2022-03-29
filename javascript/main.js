function loadData() {
    let total= 9;
    console.log("Getting data from server");
    total+=10;
}
function sayHello(name,last) {
    console.log("Hello " + name+ "" + last);
}
function sayHello10Times() {
    
    for (let i = 0; i < 10; i++){
        console.log("Hello");
     
    }
}
function printSomeNumbers() {
    for (let i = 0; i < 21; i++) {
        
        if(i != 7 && i != 13){
           console.log(i); 
        }
    }
}
function sumAll(ages) {
    let total= 0;
    for (let i = 0; i < ages.length; i++) {
        let num= ages[i];
        //total=total + num;
        total+= num;
        console.log(total);
        

        
    }
}

function findOldest(ages) {
    let solution= ages[0];
    for (let i = 0; i < ages.length; i++) {
        let list= ages[i];
        if (list > solution ) {
           solution = list;
        }
        

        
    }
    console.log("Oldest", solution);
}
function countLowerThan(solution,ages) {
    let count = 0;
    for (let i = 0; i < ages.length; i++) {
        let num= ages[i];
        if (num < solution ) {
           count += 1;
        }
        

        
    }
    console.log("There are", count, "nums lower than", solution);
}
function init() {
    console.log("Page loaded");
    loadData();
    let first = "John";
    let last = "doe";
    sayHello(first,last);
    sayHello("Maria", "Grant");



    //exercise
    sayHello10Times();
    //should print number from 0 to 20 
    //except 7 and 13
    printSomeNumbers();

    let ages = [12,43,12,87,34,67,40,24,89,38, 623,20,5,24,13,84,22,55];
    sumAll(ages);// print sum of all numbers 

    findOldest(ages); //print the oldestperson in the list;
    
    countLowerThan(25,ages);// print the count

    

}
window.onload = init;