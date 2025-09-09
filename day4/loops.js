                                            //1.
let sum = 0 ;
let i = 1;

while(i<=5){
    sum = sum + i;
    i++;
}
// console.log(sum);


                                             //2
let countdown = [];
let j = 5;
while(j>0){
    countdown.push(j);
    j--;
}
// console.log(countdown);




3//
let teaCollection = [];
let tea ;

do{
    tea = prompt(`Enter your favourite tea type (type "stop" tp finish)`);

    if(tea !== "stop"){
        teaCollection.push(tea);
    }
}
while(tea !== "stop");



//4
let total = 0;
let k = 1;
do{
    total +=k;
    k++;
} while(k<=3);



//5
let multipliedNum = [];
let numbers = [2,4,6];
let takeNum;

for(let l = 0; l<numbers.length; l++){
    // takeNum = numbers[l] * 2;
    // multipliedNum.push(takeNum);

    multipliedNum.push(numbers[l]*2); //m2
}
console.log(multipliedNum);



//6
let cities = ["paris" , "new york" , "tokyo" , "london"];
let cityList = [];
let myCity;
for(let c = 0; c<cities.length; c++){
    myCity = cities[c];
    cityList.push(myCity);
}
console.log(cityList);

