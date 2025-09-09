document
    .getElementById("changeTextButton")
    .addEventListener('click', function(){
        let pGrab = document.getElementById("myParagraph");
        pGrab.textContent = "Hi, I am MUKUL."
        
    });


document
    .getElementById("highlightFirstCity")
    .addEventListener("click", function(){
        let cities = document.getElementById("citiesList");
        cities.firstElementChild.classList.add("highlight");
    });


document
    .getElementById("changeOrder")
    .addEventListener("click", function(){
        let order = document.getElementById("coffeeType");
        order.style.backgroundColor = 'red';
        order.textContent="Espresso" ;
        
    })




document
    .getElementById("addNewItem")
    .addEventListener("click", function(){
        let element = document.createElement("li");
        element.textContent = "egg";
        let list = document.getElementById("shoppingList");
        list.appendChild(element);
    })


document
    .getElementById("removeLastTask")
    .addEventListener("click", function(){
        // let list = document.getElementById("taskList");
        // list.lastElementChild.remove();
        document.getElementById("taskList").lastElementChild.remove()
    });



document    
    .getElementById("clickMeButton")
    .addEventListener("mouseover", function(){
        alert("hii, hru");
    });


document
    .getElementById("teaList")
    .addEventListener("click", function(event){
        if(event.target && event.target.matches('.teaItem')){
            alert("you selected=" + event.target.textContent);
        }
    });


document
    .getElementById("feedbackForm")                             //form?
    .addEventListener("submit", function(event){
        event.preventDefault();                                 //use?
        let feed = document.getElementById("feedbackInput").value;
        let p = document.getElementById("feedbackDisplay");
        p.textContent = `Feedback is: ${feed}`;
    })



document
    .addEventListener("click", function(){
        document.getElementById("domStatus").textContent = "DOM fully loaded";
    });


