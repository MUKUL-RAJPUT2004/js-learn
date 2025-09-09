function createPerson(name, age){
    const person = {};

    //add properties
    person.name = name;
    person.age = age;

    //add method
    person.sayHello = function(){
        console.log(`Hello, my name is ${this.name}`);
    }
    return person;
}

const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 42);

person1.sayHello();
person2.sayHello();