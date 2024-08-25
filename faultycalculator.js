let random=Math.random();
console.log(random);

let a=prompt("enter first num")
let b=prompt("enter operation")
let c=prompt("enter third num")

let obj ={
"+":"-",
"-":"/",
"/":"*",
"*":"+"
}

if(random>0.1){
confirm(eval(`${a} ${b} ${c}`))
}
else{
    b=obj[b];
    confirm(eval(`${a} ${b} ${c}`))
}