// let arr = ['one', 'two', 'three', 'four'];
// function findLongestWord(...arr){
//     var longestWord = 0;
//     let w ;
//     for(var i=0; i< arr.lenght; i++){
//         if(arr[i].length > longestWord){
//             longestWord = arr.lenght;
//             w = arr[i];
//         }
//     }
//     return longestWord;
// }

// let l = findLongestWord(arr);
// console.log(l);

function longestString(strs) {
    // return strs.sort(function(a, b) {return b.length - a.length})[0];

    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
  }
  

  
  let arr = ['apple', 'banana', 'cherry'];
  console.log(longestString(arr));