//functions can be used as containing a set a codes to perform a function so that we dont have to write them each time

//syntax:
//function functions'sname (parameters){program}
//functions'sname(arguments)     //to call

function sayMyName(){
    console.log("A");
    console.log("l");
    console.log("i");
}
//sayMyName()

function addTwoNumbers (number1,number2){
console.log(number1+number2);}
//addTwoNumbers(5,8)

//what if we store it into a data storage

//const result = addTwoNumbers(5,3)
//console.log("result:",result);
//it is undefined bcz the 8 we got earlier was not the value of function but just the console.log code inside it

function add2Numbers(num1,num2){
    //let result = num1 + num2
    //return result    //or
    return num1 +num2
}
const result = add2Numbers(5,3)
//console.log("result:",result);

//note the result inside function and outside will function here are being treated differently

function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("ali"));

//but what if username is left empty
function loginUserMessage2(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage2()); //it will be undefined

//to prevent that:
function loginUserMessage3(username){
    if(!username){ // ! tells that the value is either undefined or null 
        return ("please enter a username");
    }
    else{
        return `${username} just logged in` 
    }
      
    }

    console.log(loginUserMessage3());
    console.log(loginUserMessage3("ali"));
    


