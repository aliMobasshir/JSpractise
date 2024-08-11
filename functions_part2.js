function calculatecartcost(...num1) { //we can use ... to multiple arguments from a single parameter
    return num1
}

//console.log(calculatecartcost(100,22,300));


//using functions for objects---------------------------:-
const user  = {
    username:"Ali",
    age:20
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the age is ${anyObject.age} years`);
}

//handleObject(user)

//or we can also:

handleObject({
    username:"Mubashshir",
    age:"21"
})

//Using functions for Arrays----------------------------:-

const myArray = [200,500,300,100]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myArray));

//or we can also

console.log(returnSecondValue([200,400,300,100]));
