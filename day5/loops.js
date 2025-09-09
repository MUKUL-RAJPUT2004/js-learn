let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas =[];
for(let i=0; i<teas.length; i++){
    
    if(teas[i]=== "chai"){
        break;
    }
    
    selectedTeas.push(teas[i]);                          //without else?
}
// console.log(selectedTeas);



//2
let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
    if(cities[i]=== "paris"){                               // ===?
        continue;
    }
    visitedCities.push(cities[i]);
}
// console.log(visitedCities);




//3
// let numbers = [1,2,3,4,5];
// let smallNumber = [];

// for(const num of numbers){                                         //for - of loops
//     if(num === 4)   break;
//     smallNumber.push(num);
// }
// console.log(smallNumber);




//4
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferedTeas = [];
for(const tea of teaTypes){
    if(tea === "herbal tea"){
        continue;
    }
    preferedTeas.push(tea);
}
// console.log(preferedTeas);




//5                                                             //for-in loop
let citiesPopulation = {
    "london": 890000,
    "new york": 840000,
    "paris": 2200000,
    "berlin": 3500000
}
let cityNewPopulation = {};
// console.log(Object.values(citiesPopulation));
for (const city in citiesPopulation) {
    // key = value
    if(city === "berlin")   break;                                // random access is done
    cityNewPopulation[city] = citiesPopulation[city];

    
}
// console.log(cityNewPopulation);



//6
let worldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000,
};
let largeCities = {};
for (const city in worldCities) {
    if(worldCities[city]< 3000000){
        continue;
    }
    largeCities[city]= worldCities[city];
}
// console.log(largeCities);



//7

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {                                      //new loops and function
   if(tea === "chai"){
    return;
   } 
   availableTeas.push(tea);

});
// console.log(availableTeas);




//8
let myworldCities = ["berlin", "tokyo", "sydney", "paris"];
let travelCities = [];

myworldCities.forEach(function(city){                           //try without  function
    if(city === "sydney" ) return;
    travelCities.push(city);
});
// console.log(travelCities);



//9
let myNumbers = [2,5,7,9];
let doubledNumbers = [];
for (let i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i] === 7) continue;
    else{
        doubledNumbers.push(myNumbers[i]*2);
    }    
}
// console.log(doubledNumbers);




//10
let teaType = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of teaType) {
    if(tea.length > 10) break;                  //continue ?
    else{
        shortTeas.push(tea);
    }
}
// console.log(shortTeas);


const arr1 = ["a", "b", "c"];
// arr1.forEach((element) => console.log(element));

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}