//objects can be created in 2 ways
//1-Singleton  -----------> Object.create

//2-Object literals

const me = {}
//console.log(typeof(me));

const mySym = Symbol("key1") //symbol

const JsUser = {
    name: "Mubashshir",
    "full name":"Muhammad Mubashshir Ali",
    [mySym] :"mykey1",            //symbol have to be declared like this
    age : 20,
    location:"lucknow",
    email:"mobasshir0001@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(JsUser.email);           //not recommended
//console.log(JsUser["email"]);       //recommended     -------->   because jsuser is object but inside that are different datatypes

//console.log(JsUser["full name"]);            //it can't be accessed by .

console.log(JsUser[mySym]);                    //"" not needed for symbol because it's already in [] format and not in ""

//JsUser.email ="alimobasshir@gmail.com"       //access object values
//console.log(JsUser["email"]); 

//Object.freeze(JsUser)                      //used to freeze values of an object(cannot be changed further)

//JsUser.email="jnkejfijeipj"               //will not shown becuase of freeze
//console.log(JsUser);  

JsUser.greeting = function(){              //creating a function called greeting
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);      //"this" will be discussed further
}
JsUser.greeting()                         //calling the functions
JsUser.greetingTwo()                      //calling the functions

