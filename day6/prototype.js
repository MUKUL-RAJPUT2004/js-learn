// let computer = {
//     cpu: 12
// };

// let lenovo = {
//     screen: "HD",
//     __proto__: computer
// };

// let tomHardware = {

// };

// // console.log(`lenovo`, lenovo.__proto__);




// let genericCar = {tyres: 4};

// let tesla ={
//     driver: "Ai"
// }

// Object.setPrototypeOf(tesla, genericCar);
// // console.log(`tesla` , tesla.tyres);
// // console.log(`tesla` , Object.getPrototypeOf(tesla));


// // const personPrototype = {
// //     greet(){
// //         console.log(`hello, my name is ${this.name}`);
        
// //     },
// // };

// // function Person(name){
// //     this.name = name;
// // }

// // Object.assign(Person.prototype, personPrototype);

// const personPrototype = {
//     greet() {
//       console.log(`hello, my name is ${this.name}!`);
//     },
//   };
  
//   function Person(name) {
//     this.name = name;
//   }
  
//   Object.assign(Person.prototype, personPrototype);
//   // or
//   // Person.prototype.greet = personPrototype.greet;
//   const irma = new Person("Irma");

// // console.log(Object.hasOwn(Person, "name")); // true
// // console.log(Object.hasOwn(Person, "greet")); // false



// eg-2
// function Person(name) { //prototype
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// Player.prototype.getMarker = function() {
//   console.log(`My marker is '${this.marker}'`);
// };

// console.log(Object.getPrototypeOf(Player.prototype)===Object.prototype) // returns Object.prototype
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// console.log(Object.getPrototypeOf(Player.prototype))
// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');

// player1.sayName(); // Hello, I'm steve!
// player2.sayName(); // Hello, I'm also steve!

// player1.getMarker(); // My marker is 'X'
// player2.getMarker(); // My marker is 'O'


const myLibrary = [];

function Book(title, author){
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID();
}

Book.prototype.bookName = function(){
  console.log(`The title of the book is ${this.title} and its writter is ${this.author}`);
};

function addBookToLibrary(title, author){
  const newBook = new Book(title, author);
  myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien');
addBookToLibrary('A Game of Thrones', 'George R. R. Martin');


console.log(myLibrary);



