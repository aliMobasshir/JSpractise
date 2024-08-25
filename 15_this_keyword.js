// let counter = createCounter();
// let counter1 = createCounter();

// function createCounter() {
//     return {
//         count : 0,
//         increment : function() {
//            counter.count++                   
//         }
//     }
// }
// counter.increment()      //counter will get increased bcz in the function it is counter.count++
// counter1.increment()     //counter1 will not be increased 


// console.log(counter);
// console.log(counter1);

// let counter = createCounter();
// let counter1 = createCounter();

// function createCounter() {
//     return {
//         count : 0,
//         increment : function() {
//            counter1.count++
//         }
//     }
// }
// counter.increment()     //counter1 will not be increased 
// counter1.increment()    //counter1 will get increased bcz in the function it is counter.count++

// console.log(counter);
// console.log(counter1);

//so to fix this issue either we have to write multiple functions or we can use the "this" keyword

//this keyword changes it's value wrt the calling context

let counter = createCounter();
let counter1 = createCounter();

function createCounter() {
    return {
        count : 0,
        increment : function() {
           this.count++
        }
    }
}
counter.increment()      //this value gets changed to counter
counter1.increment()     //this value gets changed to counter1


console.log(counter);
console.log(counter1);   //both wil be increased

//so it's like instead of writing multiple functions for multiple contexts we can use the this keyword to use the same function and make it change it's context where needed .