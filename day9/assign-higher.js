// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

const arr = [2,3,4,5,6];
const squareNumbers = arr.map(n => n*n);
// console.log(squareNumbers);





// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

let filterEvenNumbers = arr.filter(n => n%2===0);
// console.log(filterEvenNumbers);





// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

let me = [-1, -2, -4, 0, 2, 4, 10];
let sumPositiveNumbers = me.filter(n => n>=0)
                            .reduce((sum, num) =>{
                                return sum+num;
                            }, 0);
// console.log(sumPositiveNumbers);






// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

let students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
    { id: 3, name: 'Charlie', grade: 'C' }
];
let getName = students.map(n => n.name);
console.log(getName);






// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

let mu = ['apple', 'banana', 'cherry'];
