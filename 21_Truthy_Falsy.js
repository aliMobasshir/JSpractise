//some values are by default true which known as truthy values, some are false known as falsy values
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//if condition got executed bcz an empty array is a truthy value


// falsy values:-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}  and everything else

//------------------------------------------------<>-----------------------------------------------------------

//extra

if (userEmail.length === 0) {
    console.log("Array is empty");
}

//but how to take lenth of an object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} 

//because object's keys and values separately are taken in an array as:

// const threeObj = {"1":"one","2":"two","3":"three"}
// console.log(Object.keys(threeObj));
// console.log(Object.values(threeObj));
