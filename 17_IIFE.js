//Immediately Invoked Function expressions-used to immediately execute a function and prevent it from getting polluted by global scope elements.

// // Traditional function:-
// function chai()  {
//     console.log(`Database connected`)
// }
// chai()

// chai = (name) => {
//     console.log(`Database conected by ${name}`)
// }
// chai("ali")

// // IIFE  syntax- ()();       where, (function)(arguments);

//IIFE :- no name is need bcz we are'nt calling it from anywhere else)
(function()  {
    console.log(`Database connected `)
})();

//or 

((name) => {
    console.log(`Database conected by ${name}`);
})("Ali");