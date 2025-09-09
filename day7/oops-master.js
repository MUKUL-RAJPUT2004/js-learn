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
        return `${this.make} : This is an inheritence example`;
    }
}

let myCar = new Car("Toyota", "Corola");
console.log(myCar.start());
console.log(myCar.drive());