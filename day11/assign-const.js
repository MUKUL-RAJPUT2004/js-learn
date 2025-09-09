// Task 1: Create a Functional Constructor
// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".

function Person(name, age){
    if(age<=0)   throw new Error("Age must be positive");
    this.name = name;
    this.age= age;
}
Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}.`;
}

let ram = new Person("Ram", 18);
console.log(ram.greet());
