//array.reduce(callback(accumulator, currentValue) => operation, initialValue);

// where the accumulator first gets the value of initialValue and then starts getting the value of operations
//currentvalue is the iterarive value of the elements of the array

// const numbers = [1, 2, 3, 4, 5];

// // Sum all numbers
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);


// console.log(sum); // Output: 15

//or

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0); 
//console.log(priceToPay);

//similarly we can chain it too

// const priceToPay = shoppingCart.filter((item) => item.price > 999).reduce((acc,item) => acc + item.price,0); 
// console.log(priceToPay);