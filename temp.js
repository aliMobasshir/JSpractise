//Call stack-
//LIFO

// How the Call Stack Works:
// Function Invocation: When a function is invoked, the JavaScript engine adds it to the top of the call stack.

// Function Execution: The function on top of the stack is executed. If this function calls another function, the new function is added to the top of the stack.

// Function Returns: Once a function completes its execution, it is removed (or popped) from the top of the stack, and the engine continues executing the function below it on the stack.

// Stack Overflow: If the call stack grows too large, often due to an infinite recursive function call, a "stack overflow" error occurs, crashing the program.

function one() {
    console.log('Inside one function');
    two();
    console.log('Back to one function');
}

function two() {
    console.log(' inside two function');
    thirdFunction();
    console.log('Back two function');
}

function three() {
    console.log('Inside three function');
}

one();
