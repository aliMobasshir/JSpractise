//for in generally used for objects

// The for in loop in JavaScript is used to iterate over the enumerable properties of an object. It allows you to loop through the keys of an object. Here's the syntax:

// for (variable in object) {
//     // code to be executed for each property
//   }
  
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
   // console.log(key);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   // console.log(programming[key]);
}

// map cant be iterated by for in:
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


//summary of for-of and for-in loops:-

// for of Loop:
// Purpose: Iterates over the values of an iterable object (like an array, string, etc.).
// Output: The loop variable is assigned the values directly.
// Use Case: Ideal for arrays, strings, or other iterable objects when you want to access the values directly.

// for in Loop
// Purpose: Iterates over the enumerable properties (keys) of an object or array.
// Output: The loop variable is assigned the keys (or indices) of the object or array.
// Use Case: Best suited for objects where you need to access keys.

// Key Differences:
// for of gives you the actual values.
// for in gives you the keys (indices for arrays).

// When to Use:
// Use for of when you need to iterate over the values in an array or other iterable.
// Use for in when you need to iterate over an object's properties.