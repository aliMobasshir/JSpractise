//let and const data can't be accessed outside of its curly brackets(scope)
let a=300
const b=600
if(true){
    let a=10
    const b=20
}
//console.log(a);
//console.log(b);

//child function(or other) can access parent items.
//parent function(or other) can't acces child items.

function one(){
    const username ="Ali"

    function two(){
        const website = "Healway"
        console.log(username); //will be accesses
    }
    //console.log(website);  //will not be accessed
    two()
}
one()

if (true){
    const username = "Ali"
    if (username ==="Ali"){
        const website =" Healway"
        console.log(username + website)  
    }
    //console.log(website)
}
//console.log(username);


//basically jo items kisi {} ke ander declare hue hain wo bas {} k ander hi exist kerte hain aur access kiye jaa skte hain
