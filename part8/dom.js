//eg2
document.getElementById("change-text").addEventListener("click", function () {
    let paragraph = document.getElementById("demo-para");
    paragraph.textContent = "The paragraph is changed!";
});

//eg2
document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight")
});


//egg3
document.getElementById("changeOrder").addEventListener('click', function () {
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "espresso";
    coffeeType.style.padding = "5px"
}

)

//eg4
document.getElementById("addNewItem").addEventListener('click', function () {
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)
})

//5eg
document.getElementById("removeLastTask").addEventListener
    ('click', function () {

        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove();
    })

//6eg
document.getElementById("clickMeButton").addEventListener
    ('click', function () {
        alert("chaicode")
    })

//eg7
document.getElementById("teaList").addEventListener
    ('click', function (event) {
        if (event.target && event.target.matches('.teaItem')) {
            alert("you selected : " + event.target.textContent)
        }
    })

//eg8
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedback").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
});



//eg9
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('domStatus').textContent = "DOM fully loaded"
})


//eg10
document.getElementById("toggleHighlight").addEventListener('click',function(){
    let descriptionText=document.getElementById("descriptionText")
    descriptionText.classList.toggle("highlight")
})