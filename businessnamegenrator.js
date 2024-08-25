const adjective ={"1":"crazy","2":"amazing","3":"fire"}
const name ={"1":"engine","2":"food","3":"garment"}
const anotherword ={"1":"bros","2":"limited","3":"hub"}

let max=3;
let min=1;
let random1 = Math.floor(Math.random()*(max-min+1))+min
let random2 = Math.floor(Math.random()*(max-min+1))+min
let random3 = Math.floor(Math.random()*(max-min+1))+min


let a=random1
let b=random2
let c=random3

console.log(`${adjective[a]} ${name[b]} ${anotherword[c]}`);

// -----------------------------------------------------or-----------------------------------------//

let random4 = Math.random();
let random5 = Math.random();
let random6 = Math.random();

let first;
let second;
let third;

if(random4<0.33){
     first = "crazy"
} else if (0.33<=random4 && random4<0.66){
     first ="amazing"
} else {
     first ="fire"
}
if(random5<0.33){
     second = "engine"
} else if (0.33<=random5 && random5<0.66){
     second ="food"
} else {
     second ="garment"
}
if(random6<0.33){
     third = "bros"
} else if (0.33<=random6 && random6<0.66){
     third ="limited"
} else {
     third ="hub"
}

console.log(`${first} ${second} ${third}`);
