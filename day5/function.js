//1
// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
// }
// let teaOrder = makeTea("green tea");
// console.log(teaOrder);

//--
function makeTea(typeoftea){
    return `Making ${typeoftea}`;
}
let teaOrder = makeTea("green tea");
// console.log(teaOrder);





// 2
// function orderTea(teaType){
//     function confirmOrder(){
//         return `Order confirmed for chai`;
//     }
//     return confirmOrder();
// }

// let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

//--
function orderTea(teaType){
    function confirmOrder(){
        console.log(`Order confirmed for ${teaType}`);
    }
    return confirmOrder();
}
let order = orderTea("chai");






//3
// const calculateTotal = (price, quantity) => price*quantity

// let totalCost = calculateTotal(500,100);
// console.log(totalCost);

//--
const totalPrice = (price , quantity) => price*quantity;
console.log(totalPrice(10,500));
