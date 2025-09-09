/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavours = ['green tea', 'black tea', 'oolong tea'];   //declaration m1
let teaFl = new Array('green tea', 'black tea', 'oolong tea') //declaration m2
const firstTea = teaFlavours[0]
// console.log(firstTea);
// console.log(teaFlavours["2"]);
// console.log(teaFlavours["02"]);





/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "New York"]
let favouriteCity = cities[2];
// console.log(favouriteCity);





/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
// let teaTypes = ["herbal tea", "white tea", "masala chai"];
// teaTypes[1]= "jasmine chai";
// console.log(teaTypes[1]);





/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let  citiesVisited = ["Mumbai", "Sydney"]
//m1
// citiesVisited[citiesVisited.length] = "berlin"
// console.log(citiesVisited);

//m2
citiesVisited.push("berlin");
// console.log(citiesVisited);





/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);






/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolong tea", "chai"]
// let var1 = 5;
// let var2 = var1;
// var1=9;
// console.log(var2);
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);









/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"]
// let hardCopyCities = [...topCities];           //m1
let hardCopyCities = topCities.slice();           //m2
topCities.pop();
// console.log(hardCopyCities);
// console.log(topCities);







/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];
// let worldCities = europeanCities + asianCities;            //makes the string
// let worldCities = [europeanCities , asianCities];
let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);




/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala tea", "oolong tea", "earl grey", "green tea"];
let menuLength = teaMenu.length;
// console.log(menuLength);




/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
// let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
// let isLondon = cityBucketList.includes("London");
// console.log(isLondon);

let cityBucketList = ["koyoto" , "london" , "cape town" , "vancouver"];
let isLondon = cityBucketList.includes("London");
console.log(isLondon);
