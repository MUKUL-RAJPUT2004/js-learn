//contest binding

// const person ={
//     name: "Mukul",
//     greet(){
//         console.log(`Hi, I am ${this.name}`);
        
//     },
// }

// person.greet();   //works

// const greetFunction = person.greet;
// greetFunction(); 

// const boundGreet = person.greet.bind({name: "John"});
// boundGreet();

//bind, call, apply


function assignRoom(roomType) {
    return `${this.name} gets ${roomType} room`;
  }

  const student1 = { name: "Alice" };
  const student2 = { name: "Bob" };

  const assignForAlice = assignRoom.bind(student1); // New function with this = student1

console.log(assignForAlice("Premium")); // "Alice gets Premium room"

// console.log(assignRoom.bind({name: "John"}));//will not execute

// console.log(assignRoom.call(student1, "Standard")); // "Alice gets Standard room"
// console.log(assignRoom.call(student2, "Basic")); // "Bob gets Basic room"2