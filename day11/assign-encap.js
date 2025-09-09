// Task 1: Encapsulation Using Getters and Setters
// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount{
    #balance;
    constructor(name, balance){
        this.#balance = balance;
        this.name = name
    }

    get balance(){
        return `Your balance is ${this.#balance}`;
    }

    set deposit(amt){
        if(amt < 0)  console.error("Invalid amount");
        else{
            this.#balance = this.#balance + amt;
            return `Your balance is ${this.#balance}`;
        }
    }

    set widhdraw(amt){
        if(amt> this.#balance)  console.error("Not sufficient balance");
        else{
            this.#balance = this.#balance - amt ;
            return `Your balance is ${this.#balance}`;
        }
    }
}

let acc = new BankAccount("mukul", 3000);
// console.log(acc.balance);
// acc.deposit = 5000;
// console.log(acc.balance);
// acc.widhdraw = 20000;
// console.log(acc.balance);






// Task 2: Polymorphism with Method Overriding
// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

// class Shape{
//     area(){
//         return 0;
//     }
// }

// class circle extends Shape{
//     area(r){
//         return `${r*r*3.14}`;
//     }
// }

// class rectangle extends Shape{
//     area(l, b){
//         return `${l*b}`;
//     }
// }

// let m = new Shape();
// console.log(m.area());

// let c = new circle();
// console.log((c.area(4)));

// let r = new rectangle();
// console.log(r.area(2, 3));


//sol
class Shape{
    area(){
        return 0;
    }
}

class circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }

    area(){
        return Math.PI*this.radius*this.radius;
    }
}

class rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width*this.height;
    }
}

let cir = new circle(1);
console.log(cir.area());
