// for of  ----------------> Array specific loop

// The for of loop in JavaScript is used to iterate over iterable things, such as arrays, strings, maps. The loop allows you to access each element of the iterable one by one.
//iterates over direct values or elements

// Syntax:

// for (variable of iterable) {
//   // code to be executed for each element
// }

// variable: A new variable (or an existing one) that will hold the value of each element in the iterable.
// iterable: An object that can be iterated over (like an array, string, map, set, etc.).


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {        
    //console.log(num);
}

// loop iterates over each element in the arr array, and num holds the value of each element during each iteration.

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps-a Map is a collection of key-value pairs where both keys and values can be of any data type. Unlike plain JavaScript objects, which only allow strings or symbols as keys,
//also doesnt allow repeation

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


//  console.log(map);

for (const [key, value] of map) {            // by [key,value we destructured the array into key and values]   
    // console.log(key, ':-', value);
    // console.log(key);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//we are unable to iterate objects by the for of loop, so for objects we have for in loop...