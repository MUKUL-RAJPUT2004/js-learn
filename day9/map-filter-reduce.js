// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b",2);    
// map1.set("c",3);

// console.log(map1.get("a"));
// console.log(map1.size);


// const wrMap = new Map();
// wrMap["bla"] = "blaa";
// wrMap["bla2"] = "blaaa2";

// const wrMap2 = new Map();
// wrMap2["cio"] = "ciooo";
// console.log(wrMap2);

// console.log(wrMap);




//correct usage
// const contacts = new Map();
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// contacts.has("Jessie"); // true
// contacts.get("Hilary"); // undefined
// contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
// contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete("Raymond"); // false
// contacts.delete("Jessie"); // true
// console.log(contacts.get("Hilary")); 




//Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow function

// let arr = [1,2,4,3,6,7,8,9,10];
// function filterEvenNumbers(arr){
//     return arr.filter(item => ((item)%(2)) === 0 )
// }
// console.log(filterEvenNumbers(arr));






// const prices = [4, 8, 15, 6, 23, 42];
// const discountPrices = prices.map((price)=>price*2)
// console.log(prices);
// console.log(discountPrices );



// const pproducts = [
//     {name: "Laptop",    price: 499,     color: "white"},
//     {name: "Smartphones",price: 899,     color: "black"},
//     {name: "Headphones",price: 50,      color: "white"}
// ]

// const categorisedProduct = products.map(product => {
//     let category;
//     if(product.price < 100)     category = "Budget";
//     else if(product.price < 500)    category = "Mid-range";
//     else    category = "Premium";
//     return {...product, category};
// });
// // console.log(categorisedProduct);






                                                //filter
// const affordableProducts = products.filter(product => product.name.includes("phones"));
// console.log(affordableProducts);





                                                //reduce
const prices = [4,8,15,16,18,14];
const totalPrice = prices.reduce((total, currentPrice)=>{
    
    
    return total + currentPrice;
}, 0);
// console.log(totalPrice);



const words = ['Hello', ' ', 'world'];
const sentence = words.reduce((result, word)=>{
    return result+word;
}, ' ');
// console.log(sentence);



const products = [
    {name: "Laptop",    price: 499,     color: "white", inShoppingCart: true},
    {name: "Smartphones",price: 899,     color: "black", inShoppingCart: false},
    {name: "Headphones",price: 50,      color: "white", inShoppingCart: true}
]

const cartTotal = products.filter(p => p.inShoppingCart)
                          .map(p => p.price*0.5)
                          .reduce((total,price)=>{
                          return total+price
}, 0)
console.log(cartTotal);
