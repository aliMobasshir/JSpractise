const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["batman","superman","aquaman"]

marvel_heroes.push(dc_heroes)                 //---------> //pushes the whole 2nd array as a single element

console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])             ---------->       //elements of the nested array can be accessed in this manner 

//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

//const all_new_heros = [...marvel_heroes, ...dc_heroes] --------> //another way to join Arrays(more preferrable because it can combine more than 2 arrays too)

//console.log(all_new_heros); 

//const another_array= [1,2,3,[4,5,6],7,[8,9,[10,11]]]
//const simplified_another_array = another_array.flat(Infinity)    ------------------------->   //simplifies an array

//console.log(simplified_another_array);

//console.log(Array.isArray("Mubashshir")); //checks if it is an Array

//console.log(Array.from("Mubashshir"));    //creats an array from an object

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3));  //used make a new array from a set of elements
