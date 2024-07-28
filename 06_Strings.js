//can also open in browser console for better visualisation
//open console as => open browser->right click anywhere->click on inspect->click on console

//there are 2 ways to declare a String

const name ="Mubashshir"    //way1
const repocount = 2

//console.log(name + repocount + "letsgo")   (not recommended)

console.log( `hello my name is ${name} and my repo count is ${repocount}`);  //(recommended)

//way 2 (better,supports protocols)(object)  :-

const gameName = new String("clash-of-clans")
console.log(gameName);

//some functions we can use now are:-

console.log(gameName[0]);     //prints character at index 0

console.log(gameName.length);    // states length
console.log(gameName.toUpperCase()); //converts into uppercase

console.log(gameName.charAt(2));    //states character at index 
console.log(gameName.indexOf('h'));  //states index of desired character

const newString = gameName.substring(0,4)  //selects selected parts a string
console.log(newString);

const anotherString = gameName.slice(-5,14) // -ve starts from right side to left,+ve starts from left to right.
console.log(anotherString);

const newStringOne ="     mubashshir     "
console.log(newStringOne);
console.log(newStringOne.trim());   //removes spaces from front and end

const url = "https://ali.com/mubashshir%20ali"

console.log(url.replace('%20','-'));  //replaces some parts of a string with a new one

console.log(url.includes('ali'));         //to check whether selected string is in the string or not(true/false) 
console.log(url.includes('cashew'));//to check whether selected string is in the string or not(true/false) 

console.log(gameName.split('of')); //splits  the string into two from the selected part




