// The .map() method in JavaScript creates a new array which can return values It's great for transforming data without changing the original array.

// syntax:-
// let newArray = array.map(element => {
//     // transformation logic
// });

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//we can also use chaining:-
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

//here every next method used the value of maipulated by the previous method and not the initial values.