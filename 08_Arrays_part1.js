//const arr= [0,4,3,2]     // A way to declare Array
//console.log(arr);
 
const myarr =new Array(1,2,4,7,8)     //Another way to declare an Array

//console.log(myarr);                 
//console.log(typeof(myarr));           //Array is of type object

myarr.push(5)      //adds desired element as the last element of the Array
//console.log(myarr);
myarr.pop()        //removes the last element from the Array
//console.log(myarr);

myarr.unshift(9)   //adds desired element as the first element of the Array
//console.log(myarr); 
myarr.shift()     //removes the first element from the Array
//console.log(myarr); 

//console.log(myarr.includes(8));     ------->   //checks if an element is present or not in an Array returns boolean

//console.log(myarr.indexOf(8))       ------->   //tells the index

//console.log(myarr[4]);              ------->   //prints element of desired index

const newarr = myarr.join()           //will give the values of myarr to newarr but newarr will be a String

//console.log(myarr);
//console.log(newarr);

const ogarr = new Array (0,1,2,3,4,5)
console.log("A = ",ogarr);

const slicearr = ogarr.slice(1,3)     //trims desired part of an Array excluding end of the interval(here index 1 to 3,excluding 3)
console.log(slicearr);  //prints sliced part 

const splicearr = ogarr.splice(1,3)   //trims desired part of an Array including end of the interval(here index 1 to 3,including 3)
console.log("A = ",ogarr);      //prints manipulated array
console.log(splicearr);         //prints spliced part


//the difference b/w slice and splice apart from inclusion and exclusion of the range's end is => splice manipulates the original array too like it the original array will now not contain the sliced part of the array