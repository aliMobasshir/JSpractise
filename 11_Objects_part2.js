//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "syeda"
tinderUser.isLoggedIn = "false"

//console.log(tinderUser);

const regularUser ={
    email: "syedadalal@gmail.com",
    fullname: {
        hisname:{
                   firstname: "syeda",
                   lastname : "dalal"
        }
        
    }
}

//console.log(regularUser.fullname.hisname.lastname);

//merging
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

const obj4 ={obj1,obj2,obj3}    //just containing
//console.log(obj4);


 const obj5 = Object.assign({}, obj1, obj2, obj3) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
 //console.log(obj5);

const obj6 ={...obj1,...obj2,...obj3}  //merging them
console.log(obj5);

//on backend we usually get arrays of objects as:

const users = [
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:2,
        email:"2@gmail.com"
    },
    {
        id:3,
        email:"3@gmail.com"
    }
]
console.log(users[0]);

//.....................................

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));    //prints keys of the object
//console.log(Object.values(tinderUser));  //prints values of the object

 //console.log(tinderUser.hasOwnProperty("isLoggedIn")); // check if a property is present or not

 const course = {
    coursename : "js in hindi",
    teacher : "hitesh",
    fee : "frameElement"
 }

 //console.log(course.coursename);

 //but suppose if we have to use coursename multiple times all over the program then writing course.coursename each time is a hectic task so what we can do is:

 //const {coursename}=course // by this we can now directly use coursename
 //console.log(coursename); 

 //we can also give it another name in case of convenience
 const {coursename:cn}=course
 //console.log(cn);
 
 
 