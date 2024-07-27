
/*primitive data types are stored in stack memory
non-primitive data types are stored in heap memory */


//stack example=>

let myName = "ali"
let myFirstName=myName   //clone of myName is created and assigned to myFirstName

console.log(myName);
console.log(myFirstName);

myFirstName="Mubashshir"  

console.log(myName);
console.log(myFirstName);

/*in stack : clone is made at declaration ,so thats why whe we changed the value of myFirstName there's no change in myName as not the real myName is linked to MYFirstName but it's clone is */

//heap example =>

let userone = {
    email : "mmali@gmail.com" ,
    upiId :  "ali@ybl"
}

let usertwo = userone  //usertwo is referred to the original value of userone

console.log(userone.email);

usertwo.email = "ali@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

/*in heap : no clone is made but real value location is referred , thats why when we changed the value of usertwo's email the userone's email also got changed, because both are referrig to the same memory location*/

//note=> the datatype used in heap's example is object and will be discussed further.

//head to notebook notes for better understanding.