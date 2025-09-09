//Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array

// function filterNumber(arr, ans){
//     for (let index = 0; index < arr.length; index++) {
//         if(typeof(arr[index]) === "number"){
//             ans[index]=arr[index];
//         }    
//     }
//     return ans;
// }

// let arr=[1, "a", true];
// // let ans=[];
// console.log(filterNumber(arr));

// //sol
// function filterNumber(arr) {
//     return arr.filter(item => typeof item === 'number');
// }






                                    // Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array

// function alter(s,e){
//     let temp = ar4r[e];
//     arr[e]=arr[s];
//     arr[s]=temp;
// }

// function reverseTheArray(){
//     let s=0;
//     let e=arr.length - 1;
//     while(s<=e){
//         alter(s,e);
//         s++;
//         e--;
//     }
// }

// let ar4r=[1, 2, 3, 4, 5];
// reverseArray(ar4r);
// console.log(ar4r);

// //sol
// function reverseArray(ar4r){
// return ar4r.reverse();
// }







//Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array

// function findMax(){
//     let ans=Number.NEGATIVE_INFINITY;
//     if(ar.length == 1) return ar[0];
//     for (let i = 0; i < ar.length; i++) {
//         for (let j = 0; j < ar.length; j++) {
//           if(ar[i]>ar[j]) {
//            if(ans<ar[i])    ans = ar[i];
//           } 
//         }
//     }
//     return ans;
// }

// let arr= [10,2];
// console.log(findMax(arr));

// //sol
// function findMax(){
//     return Math.max(...arr);
// }




//Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

// function removeDuplicates(array){
//      let i = 0;
//      let j = 1;
//      let aans= [];
//     while(i!=array.length){
//                aans.push(array[i]);

//         if(array[i] === array[j] && j<=array.length ){
//            j++;
//         }
//         i=j;
//         j++;
//     }
//     return aans;
// }


// let array=[1,2,2,3,4,4,5];

// let ansArray = removeDuplicates(array);
// console.log(ansArray);

// function removeDuplicates(array) {
//     let aans = [];
//     let i = 0;
//     while (i < array.length) {
//         aans.push(array[i]);
//         let j = i + 1;
//         while (array[i] === array[j]) {
//             j++;
//         }
//         i = j;
//     }
//     return aans;
// }

// let array = [1, 2, 2, 3, 4, 4, 5];
// let ansArray = removeDuplicates(array);
// console.log(ansArray);

// //sol
// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }






// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

// function flattenArray( nestedArray ){
//     for(let i=0; i<nestedArray.length; i++){
//         for(let j=0;j<nestedArray[i].length; j++){
//             ans.push(nestedArray[i][j]);
//         }
//     }
//     return ans;
// }

let nestedArray=[1,[2,3],[4,[5, 6]]];
let FinalAns = flattenArray( nestedArray );
console.log(FinalAns);

//sol
function flattenArray(arr){
    return arr.flat(Infinity);
}