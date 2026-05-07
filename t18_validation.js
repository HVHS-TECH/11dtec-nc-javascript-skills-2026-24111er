/****************************
T16 Arrays Continued
****************************/
console.log("Running t016_introduction.js")
console.log("Hello World!")

const Output = document.getElementById("spaceForJavaScriptOutput");
const twoOutput = document.getElementById("spaceForJavaScriptOutputTwo")
var shoppingArray = [];
var l;
var i;
var username;
var userMoney;
var userAge;
var currentYear = 2026;
var newMoney;
// Variables

/*
Main Code
*/

// welcome()
displayProduct("Chocolate bar", 4 )
displayProduct("Chips", 3 )
displayProduct("Drink", "2.50" )


/*
Functions
*/

function getFormInputS () {
    Output.innerHTML = "";
    twoOutput.innerHTML = "";
    let ShoppingValue = document.getElementById("Shoppingfield").value;
    shoppingArray.push(ShoppingValue)
    Output.innerHTML += "<p>You have added " + ShoppingValue + " to your list</p>";
   
}

function getFormInputL () {
    twoOutput.innerHTML = "<ul>These are the items on your shopping list:</ul>";
    for (l = 0; l<shoppingArray.length; l++) {
        twoOutput.innerHTML += "<li>" + shoppingArray[l] + "</li>"
    }


   
}

function getFormInputCo () {
    const countValue = document.getElementById("Countfield");
    let choiceCount = Number(countValue.value);
    Output.innerHTML = "";
    twoOutput.innerHTML = "";

    if (countValue.checkValidity() === false) {
        Output.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else if (choiceCount>99 || choiceCount<1) {
        Output.innerHTML = "<b><p>Please enter a number between 1 and 99</p></b>";
    } else {
        for (i = choiceCount; i>=2; i--) {
            Output.innerHTML += "<p>There are " + i +  " bottles of milk on the wall</p>";
            console.log (i)
        }

        i = 1;
        Output.innerHTML += "<p>There is 1 bottle of milk on the wall</p>";
    }


   
}




function getFormInputN () {
    Output.innerHTML = "";
    twoOutput.innerHTML = "";
    const NAME = document.getElementById("Namefield");
    let username = (NAME.value)

    if (NAME.checkValidity() === false) {
        Output.innerHTML = "<b><p>Only letters can be inserted into this field</p></b>";
        
    } else {
        Output.innerHTML += "<p>Hi " + username + "</p>";
        console.log(username)
    }
}

function getFormInputA () {
    Output.innerHTML = "";
    twoOutput.innerHTML = "";
    const AGE = document.getElementById("Agefield");
    let userAge = Number(AGE.value);

    if (AGE.checkValidity() === false) {
        Output.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else {
        Output.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
        console.log(userAge)
    }

}

function getFormInputM () {
    Output.innerHTML = "";
    twoOutput.innerHTML = "";
    const MONEY = document.getElementById("Moneyfield");
    let userMoney = Number(MONEY.value);

    if (MONEY.checkValidity() === false) {
        Output.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else {
        Output.innerHTML += "<p>You have " + userMoney + " dollars</p>";
        console.log(userMoney)
        if (userMoney>=4) {
            Output.innerHTML += "<p>A chocolate bar costs $4</p>";
            Output.innerHTML += "<p>You CAN afford a chocolate bar</p>";
        } else if (userMoney<4) {
            Output.innerHTML += "<p>A chocolate bar costs $4</p>";
            Output.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar</p>";
        }
    }

    
}

function start () {
    Output.innerHTML = "";
    twoOutput.innerHTML = "";
    Output.innerHTML += "<h2>Added by Javascript</h2>";
    Output.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
    Output.innerHTML += "<p>You were born in " + (currentYear - userAge) + "</p>";
    Output.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + "</p>";
    Output.innerHTML += "<p>You have " + userMoney + " dollars</p>";
    Output.innerHTML += "<p>You spend half of your money and now you have " + (newMoney = (userMoney / 2)) + " dollar</p>";
    Output.innerHTML += "<p>Then you get $3, now you have " + (newMoney + 3) + " dollars</p>";

}

// function welcome() {
//     Output.innerHTML = "<h1>Welcome to the Shop</h1>";
//     console.log("h1")
// }

function displayProduct(_name, _price) {
    Output.innerHTML += "<p>" +_name+ ": $" +_price+ "</p>";

}