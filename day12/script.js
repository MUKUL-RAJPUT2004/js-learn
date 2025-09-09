//exp1

document.getElementById('changeTextButton').
addEventListener('click', function (){                  //()=>{}
    let parag = document.getElementById("myParagraph");
    parag.textContent = "hi am mukul, paragraph changed";
});



//exp-2

document
.getElementById('highlightFirstCity')
.addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});




//exp-3

document
.getElementById("changeOrder")
.addEventListener('click', function(){
    let coffeeType = document.getElementById('coffeeType');
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = 'red';
});




//exp-4

document
.getElementById("addNewItem")
.addEventListener('click', function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)
});




//exp-5
document
.getElementById("removeLastTask")
.addEventListener('click', function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});




//exp6
document
.getElementById("clickMeButton")
.addEventListener('dblclick', function(){
    alert("mukul");
})




//exp-7
document
.getElementById("teaList")
.addEventListener("click", function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("you selected:" + event.target.textContent);
    }
});




//exp-8
document
    .getElementById("feedbackForm")
    .addEventListener("submit", function(event){
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;                             //how to selelct label
        console.log(feedback);
        document.getElementById("feedbackDisplay")
                .textContent= `Feedback is: ${feedback}`;
});





//exp-9
document
    .addEventListener('DOMContentLoaded', function(){
        document.getElementById('domStatus').textContent = "DOM fully loaded";
    })




//exp-10
document
    .getElementById("toggleHighlight")
    .addEventListener('click', function(){
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.toggle("highlight");
    })



    //node list - not array
    //html collection