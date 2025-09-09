//Task 1: Sum of First N Natural Numbers 
// Write a function sumOfN(n) that returns the sum of the first n natural numbers

// function sumOfnaturalnumbers(n){
//     if(n<0) return "Input not valid";
//     return (n*(n+1)/2);
// }

// console.log(sumOfnaturalnumbers(5));

//sol
// function sumOfN(n){
//     let sum = 0;
//     for(let i=1; i<= n; i++){
//         sum += i;
//     }
//     return sum;
// }


//Task 2: Multiplication Table
// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

// function printMultiplicationTable( n ){
//     let i =1;
//     while(i<=10){
//         console.log(`${n}*${i}=${n*i}`);
//         i++;
//     }
// }

// printMultiplicationTable(2);

//sol
// console.log(`${n}*${i}=${n*i}`);





//Task 3: Count Vowels in a String
// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

// function countVowels(str){
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// let str = "elephant";
// let Count = countVowels(str);
// console.log(Count);

// //sol
// function countVowels(str){
//     let count = 0;
//     const vowels = 'aeiouAeiou';

//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }






//1
var numbers = [3, 4, 5, 6, 7, 8, 9];
// function square(x) {
//   return x * x;
// }
// console.log(numbers.map(square));

const newNumbers = numbers.map((x) =>{
    console.log(`${x+1}`);
    
});

