//when condition is true code will be executed. 

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("equals to 40");
// } else {
//     console.log("temperature is other than 40");
// }

// <, >, <=, >=, ==, !=, ===, !==    //these are generally used for making condition

//  const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

//console.log(`User power: ${power}`);  //will not be accessed


//nested if else :-
// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {       //AND(&) statement every condition should be true 
    console.log("Allow to buy course");
} else {
    console.log("dont allow");
    
}

if (loggedInFromGoogle || loggedInFromEmail) { //OR(||) statement any one condition should be true
    console.log("User logged in");
}