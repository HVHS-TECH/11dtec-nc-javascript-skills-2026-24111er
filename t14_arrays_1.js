/****************************
T12 Conditionals
***********************/
console.log("Running t12.js")
console.log("Hello World!")

// Variables
const Output = document.getElementById("spaceForJavaScriptOutput");

var chocolateLike = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
var username;
var userMoney;
var userAge;
var currentYear = 2026;
var newMoney;


/*
Main Code
*/
/*
welcome()
displayProduct("Chocolate bar", 4 )
displayProduct("Chips", 3 )
displayProduct("Drink", "2.50" )
*/




/*
Functions
*/
function getFormInputN () {
    let username = document.getElementById("Namefield").value;
    Output.innerHTML += "<p>Hi " + username + "</p>";
    console.log(username)
}

function getFormInputA () {
    const AGE = document.getElementById("Agefield").value;
    let userAge = Number(AGE);
    Output.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
    console.log(userAge)

}

function getFormInputM () {
    const MONEY = document.getElementById("Moneyfield").value;
    let userMoney = Number(MONEY);
    Output.innerHTML += "<p>You have " + userMoney + " dollars</p>";
    console.log(userMoney)

    if (userMoney>=4) {
        Output.innerHTML += "<p>A chocolate bar costs $4</p>";
        Output.innerHTML += "<p>You CAN afford a chocolate bar</p>";
        Output.innerHTML += "<p> You will get $" + calculateChange(userMoney, 4) + " change</p>";
    } else if (userMoney<4) {
        Output.innerHTML += "<p>A chocolate bar costs $4</p>";
        Output.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar</p>";
    }
}

function start () {
    Output.innerHTML += "<h2>Added by Javascript</h2>";
    Output.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
    Output.innerHTML += "<p>You were born in " + (currentYear - userAge) + "</p>";
    Output.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + "</p>";
    Output.innerHTML += "<p>You have " + userMoney + " dollars</p>";
    Output.innerHTML += "<p>You spend half of your money and now you have " + (newMoney = (userMoney / 2)) + " dollar</p>";
    Output.innerHTML += "<p>Then you get $3, now you have " + (newMoney + 3) + " dollars</p>";

}
/*
function welcome() {
    Output.innerHTML = "<h1>Welcome to the Shop</h1>";
    console.log("h1")
}

function displayProduct(_name, _price) {
    Output.innerHTML += "<p>" +_name+ ": $" +_price+ "</p>";

}

function calculateChange(_money, _productPrice) {
    let change = _money - _productPrice;
    return change;
}
*/
