          //documentation
// function myFunc(theObject){
//     theObject.make = "Toyoto";
// }

// const myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
// };

// console.log(myCar.make);
// myFunc(myCar);
// console.log(myCar.make);

// function myFunc(theArr){
//     theArr[0]=30;
// }

// const arr = [45];

// console.log(arr[0]);
// myFunc(arr);
// console.log(arr[0]);



//4
// function makeTea(typeOfTea){
//     return `maketea: ${typeOfTea}`;
    
// }

// function processTeaOrder(teaFunction){
//     return teaFunction('earl grey');
// }

// let order = processTeaOrder(makeTea);
// console.log(order);

//--
function makeTea(tea){
    return `Passes ${tea}`;
}
function processTeaOrder(makeTea){
    return makeTea("earl grey");
}
let t = processTeaOrder(makeTea);
// console.log(t);






//5


// function createTeaMaker(name){
//     return function(teaType){
//         return `Making ${teaType} ${name}`;
//     }
// }

// let teaMaker = createTeaMaker("hitesh");
// let result = teaMaker("green tea");
// // console.log(result);

//--
function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teamaker = createTeaMaker();
console.log(teamaker("green tea"));







// const createPet = function (name) {
//     let sex;
  
//     const pet = { // This could be named anything, e.g., "obj"
//       setName(newName) {
//         name = newName;
//       },
//       getName() {
//         return name;
//       },
//       getSex() {
//         return sex;
//       },
//       setSex(newSex) {
//         if (
//           typeof newSex === "string" &&
//           (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
//         ) {
//           sex = newSex;
//         }
//       },
//     };
  
//     return pet;
//   };
  
//   const apple = createPet("Vivie"); // Changed "pet" to "apple"
//   console.log(apple.getName()); // Vivie
  
//   apple.setName("Oliver");
//   apple.setSex("male");
//   console.log(apple.getSex()); // male
//   console.log(apple.getName()); // Oliver

