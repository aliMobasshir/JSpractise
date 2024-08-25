//----------------NUMBERS---------------------------

const score = 400   //simple way to create a variable of num type
console.log(score); 

const balance = new Number(330)  //but this way we can see list of functions applicable on console
console.log(balance);

//like:-

console.log(balance.toString().length);   // tells length
console.log(balance.toFixed(1)); // ads decimals upto desired positions

/* to be studied not understood yet
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
*/

const hundreds = 100000
console.log(hundreds.toLocaleString()); //  US Style

console.log(hundreds.toLocaleString('en-IN')); //idk why not working

//--------------------MATHS-------------------------

console.log(Math);

console.log(Math.abs(-4)); // Takes MOD
console.log(Math.round(5.6)); // Rounds-off to nearest integer
console.log(Math.ceil(4.2)); //always rounds-off to the upper integer
console.log(Math.floor(3.9)); //always round off to the lower integer
console.log(Math.min(4,8,3,9));
console.log(Math.max(4,8,3,9));

//----------------Math.random------------------->
console.log(Math.random()); //generates a random number between 0.01.. to 0.9..
console.log((Math.random()*10) + 1); //converts to shift to the left side of the decimal
console.log(Math.floor(Math.random()*10) + 1);//removes the unnecessary decimal values

//to generate the value between a desired interval
const min = 10 
const max = 20
console.log(Math.floor(Math.random() *(max - min +1))+min); //formula to generate a random number between of a desired interval of a minimal and maximum value(including them too) , here it is 10 and 20

//A simple explanation  is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible  hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,10] m convert ho jaega....

//similarly, is concept ko max min m bhi leke jaa skte hai
