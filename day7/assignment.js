// function stringToNumber(num){
//     // let ans = parseInt(num, 10);
//     // let ans = +num;
//     // let ans = num * 1;
//     let ans = num - 0;
//     return ans;
// }

// let finalAns = stringToNumber('125');
// if(isNaN(finalAns))    console.log(finalAns);
// else console.log("Not A Number");

                  //sol
function stringToNumber(input){
    const num = Number(input);
    console.log(num);
    
    if(isNaN(num)){
        return "NOt A Number";
    }
    return num;
}
// console.log(stringToNumber("0"));




//2.
// function flipBoolean(fv){
//     if(fv === 1 || fv === "true" || fv === "True")      return false;
//     else return true;
// }
console.log(flipBoolean(0));
                   //sol
function flipBoolean(input){
    return !Boolean(input);
}



//3.
function whatAmI (fv){
    let  value = typeof(fv);
    return `I'm a ${value}`;
}
// console.log(whatAmI(10));




//4.
// function isItTruthy(fn){
//     // if(fn === 0 || fn === false || fn === empty string || fn === null || fn === undefined || fn === NaN)      return  `It's falsey!`
//     // else return `It's truthly!`;

//     const inputValue = fn.value;
//     if(inputValue)  return `It's truthly!`;
//     else return `It's falsly!`;
// }

// console.log(isItTruthy(1));

                   //sol
function isItTruthy(input){
    if(input){
        return "Its truthy!";
    }
    else{
        return "Its falsey!";
    }
}
console.log(isItTruthy("ab"));
