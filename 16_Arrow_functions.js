// // // Arrow functions offers concise syntax for defining functions

// // By the use of normal function:-
// const square = function(num){
//     return num * num
// }
// console.log(square(5));

// // By the use of Arrow function:-
// const square = (num) => {
//     return num*num
// }
// console.log(square(6));

// // if the code only contains a line we can use implicit return(no need to state return)
// const square = (num) => num*num
// console.log(square(7));

// // it is better to wrap the program in paranthesis(), this way is used in react, dont use curly braces{}.
const square = (num) => (num*num)
console.log(square(8));

//similarly
const sum = (a,b) => (a+b)
console.log(sum(7,3));

//Note : this keyword doesn't work in Arrow function.