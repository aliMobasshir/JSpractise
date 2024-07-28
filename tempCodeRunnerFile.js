//there are 2 ways to declare a String
const name ="Mubashshir"    //way1
const repocount = 2

//console.log(name + repocount + "letsgo")   (not recommended)

console.log( `hello my name is ${name} and my repo count is ${repocount}`);  //(recommended)

//way 2 (better,supports protocols)(object)  :-

const gameName = new String("clash-of-clans")
console.log(gameName);

//some functions we can use now are:-
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));