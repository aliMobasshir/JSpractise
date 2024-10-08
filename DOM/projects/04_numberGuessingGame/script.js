const result = document.querySelector("#result")
const pHTML = document.querySelector("#prevGuess")
let guessField = document.querySelector("#userGuess")
let prevGuess = [];
const btn = document.querySelector("#btn")
const retry = document.querySelector("#retry")
let attemptslLeft = document.querySelector("#remainingAttempts")


let num = Math.floor(Math.random() * 100)+1;
console.log(num);

let attempts = 10

attemptslLeft.innerHTML = `<span>Attempts left : </span>${attempts}`

btn.addEventListener("click", function (event) {
mainWorking()
event.preventDefault();    
})

guessField.addEventListener("keyup",function(e){
    if(e.key==='Enter'){
        mainWorking()
        e.preventDefault();
    }
}
)


function mainWorking(){
    let userGuess = document.querySelector("#userGuess").value
    userGuess = parseInt(userGuess)

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100 ) {
        result.innerHTML = `<span>Please enter a valid number between 1 to 100</span>`
       
         document.querySelector("#userGuess").value = ""
    }
    else {
        if (!prevGuess.includes(userGuess)) {
            prevGuess.push(userGuess)
            pHTML.innerHTML = `<span>Your previous guesses: </span> ${prevGuess.join(", ")}`

            attempts--;
            attemptslLeft.innerHTML = `<span>Attempts left : </span>${attempts}`

            ifElse(userGuess)

            if (userGuess == num) {
                result.innerHTML = `<span>WooHoo !!! You guessed it Right</span>`
                 document.querySelector("#userGuess").value = ""
                btn.disabled = true;
                retry.innerHTML = `<button>Play Again</button>`

                retry.addEventListener("click", retryGame)
            }

            else if (attempts == 0) {
                result.innerHTML = `<span>oops!Out of Attempts,correct Guess was:${num}</span>`
                 document.querySelector("#userGuess").value = ""
                btn.disabled = true;
                retry.innerHTML = `<button>Retry</button>`

                retry.removeEventListener("click", retryGame)
                retry.addEventListener("click", retryGame)
            }
        }

        else {
            result.innerHTML = `<span>You have already entered ${userGuess}<span>`
             document.querySelector("#userGuess").value = ""
        }
    }

}

function ifElse(userGuess) {

const diff =Math.abs(userGuess - num)
if (diff < 5) {
    result.innerHTML = `<span>Almost got it! Just a bit more!</span>`;
     document.querySelector("#userGuess").value = ""
} else if (diff < 10) {
    result.innerHTML = `<span>You're really close! Keep it up!</span>`;
     document.querySelector("#userGuess").value = ""
} else if (diff < 30) {
    result.innerHTML = `<span>Good guess! You're getting there!</span>`;
     document.querySelector("#userGuess").value = ""
} else if (diff < 50) {
    result.innerHTML = `<span>Not quite! You're warming up!</span>`;
     document.querySelector("#userGuess").value = ""
} else if (diff < 70) {
    result.innerHTML = `<span>Hmm, a little off! Try again!</span>`;
     document.querySelector("#userGuess").value = ""
} else {
    result.innerHTML = `<span>Far off! Let's see if you can get closer!</span>`;
     document.querySelector("#userGuess").value = ""
}
}

function retryGame(event) {
    prevGuess = [];
    attempts = 10
    attemptslLeft.innerHTML = `<span>Attempts left : </span>${attempts}`
    pHTML.innerHTML = `<span>Your previous guesses: </span> ${prevGuess}`
    btn.disabled = false;
    result.innerHTML = ""
    retry.innerHTML = ""
    num = Math.floor(Math.random() * 100)+1;
}

const lightMode=document.querySelector("#lightMode")
lightMode.addEventListener("click",function(event){
    const root = document.documentElement;

    if(lightMode.getAttribute("src")=="lightMode.png"){

        root.style.setProperty("--primary-color","beige")
        root.style.setProperty("--secondary-color","skyblue")
        root.style.setProperty("--hover-color","rgb(100, 190, 220)")
        root.style.setProperty("--content-color","black")
        root.style.setProperty("--inputBox-color","rgb(212, 234, 241)")
    
        
         lightMode.setAttribute("src","nightMode.png")
    }
   else{

        root.style.setProperty("--primary-color","rgb(75, 77, 77)");
        root.style.setProperty("--secondary-color","yellow")
        root.style.setProperty("--hover-color","rgb(196, 196, 34)")
        root.style.setProperty("--content-color","white")
        root.style.setProperty("--inputBox-color","beige")
    
        lightMode.setAttribute("src","lightMode.png")

   }

   
})