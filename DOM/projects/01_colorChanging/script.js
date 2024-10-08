const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach(function(btn){
   btn.addEventListener("click",function(event){
//    if(event.target.id === "grey"){
//     body.style.backgroundColor = "grey"
//    }
//    if(event.target.id === "white"){
//     body.style.backgroundColor = "white"
//    }
//    if(event.target.id === "blue"){
//     body.style.backgroundColor = "blue"
//    }
//    if(event.target.id === "yellow"){
//     body.style.backgroundColor = "yellow"
//    }

switch(event.target.id){
   case "grey" :  body.style.backgroundColor = "grey";
   break;
   case "blue" :  body.style.backgroundColor = "blue";
   break;
   case "yellow" :  body.style.backgroundColor = "yellow";
   break;
   case "white" :  body.style.backgroundColor = "white";
   break;
}
   })
} )