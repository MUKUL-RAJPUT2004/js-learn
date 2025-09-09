// let car = {
//     make: "toyota",
//     model: "Camry",
//     year: 2020,
//     start: function(){
//         return `${this.make} car got started in ${this.year}`;
//     },
// };
// // console.log(car.start());



// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let john = new Person("Jhon", 20);
// console.log(john.name);




//prototypal chain
// function Animal(type){
//     this.type = type;
// }

// Animal.prototype.speak = function () {
//     return `${this.type} makes a sound`;
// };

// Array.prototype.hitesh = function () {
//     return `Custom method ${this}`;
// };

// let myArray = [1,2,3];
// console.log(myArray.hitesh());
// let myNewArray = [1,2,3,4,5,6];
// console.log(myNewArray.hitesh());




//class
class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}
class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritence example`              
    }
}
let myCar = new Car("Toyota", "Corola");
// console.log(myCar.start());
// console.log(myCar.drive());
let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);



//Encapsulation- restricting the usage of the variables

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// 




//Abstraction- hiding implementation

class CoffeMachine {
    start(){
        return `Starting the machine...`;
    }

    brewCoffee(){
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgone} and ${msgtwo}`;
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.pressStartButton());







//polymorphism

class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguin can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());







//static method

class Calculator{
    static add(a,b){
        return a+b;
    }
}

// let miniCal = new Calculator();
// console.log(miniCal.add(2,3));

// console.log(Calculator.add(2,3));










//getters - setters- having more control

class Employee{

    #salary;  //private 
    constructor(name, salary){
        if(salary<0)    throw new Error("Salary can't be negative");
        
        this.name = name;
        this.#salary= salary
    }

    get salary(){
        return `You aren't allowed to see salary ${this.#salary}`;
    }
    set salary(value){
        if(value < 0){
            console.error("Invalid Salary");
            
        }
        else{
            this.#salary = value;
        }
    }
}
let emp = new Employee("Alice", 50000);

emp.salary = 60000;
// console.log(emp.#salary);
console.log(emp.salary);
