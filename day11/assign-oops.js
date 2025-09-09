// Task 1: Class Inheritance
// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
 
//  class Vehicle {
//     constructor(make , model){
//         this.make = make;
//         this.model = model;
//     }
//     getDetails(){
//         return `Make: ${this.make}, Model: ${this.model}.`;
//     }
//  }

//  class Car extends Vehicle{
//     startEngine(){
//         return "Engine Started";
//     }
//  }

//  let myCar = new Car("sfs", "fsd");
//  console.log(myCar.startEngine());
//  console.log(myCar.getDetails());
 
 




// Task 2: Method Overriding in Inheritance
// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".

// class Vehicle {
//     constructor(make , model){
//         this.make = make;
//         this.model = model;
//     }
//     move(){
//         return `The vehical is moving.`;
//     }
//  }

// class Car extends Vehicle{
//     move(){
//         return `The car is driving.`;
//     }
//  }

// let veh1 = new Car;
// let veh2 = new Vehicle;
// console.log(veh1.move());
// console.log(veh2.move());









// Task 3: Static Methods in Classes
// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

class Vehicle {
        constructor(make , model){
            this.make = make;
            this.model = model;
        }
        static isVehicle(obj){
            if(obj instanceof Vehicle)      return `true`;
            else    return `false`;  
        }
            
     }

let veh = new Vehicle("dds", "sf");
let vehh = {
    
}
console.log(Vehicle.isVehicle(vehh));

    