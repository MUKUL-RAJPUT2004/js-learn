function me(){
    let counter =4;
    return function(){
        counter++;
        return counter;
    }
}

let increment = me();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

/**
Closures: Functions with Memory 🧠
A closure is simply a function's ability to remember the variables from the environment where it was created.
The Storage Bubble: When a function returns another function, the inner function keeps a private "storage bubble" with all the variables from its parent.
Persistent, Private State: This allows us to create functions that remember things. Our counter example showed this perfectly: the increment function remembered the counter variable, and nothing outside of that function could ever touch or reset it.
The "Factory" Idea: The key is that the initialization of variables (like let counter = 4;) happens only once when the outer "factory" function is called. The function it returns then operates on that same, persistent variable forever.
 */