/****************************
T21 Objects
****************************/
console.log("Running t21.js")
console.log("Hello World!")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const SECOND_OUTPUT = document.getElementById("spaceForJavaScriptOutputTwo");
var shoppingArray = [];
var chocolateLike = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
var l;
var i;
const CURRENT_YEAR = 2026;
var newMoney;
var userDetails = [{

}]
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

function getFormInputShopping () {
    OUTPUT.innerHTML = "";
    SECOND_OUTPUT.innerHTML = "";
    let _shoppingValue = document.getElementById("Shoppingfield").value;
    shoppingArray.push(_shoppingValue)
    OUTPUT.innerHTML += "<p>You have added " + _shoppingValue + " to your list</p>";
   
}

function getFormInputList () {
    SECOND_OUTPUT.innerHTML = "<ul>These are the items on your shopping list:</ul>";
    for (l = 0; l<shoppingArray.length; l++) {
        SECOND_OUTPUT.innerHTML += "<li>" + shoppingArray[l] + "</li>"
    }


   
}

function getFormInputCountVerses() {
    const COUNT_VALUE = document.getElementById("Countfield");
    let _verseCount = Number(COUNT_VALUE.value);
    const VERSE_MAX = 99;
    const VERSE_MIN = 1;
    OUTPUT.innerHTML = "";
    SECOND_OUTPUT.innerHTML = "";

    if (COUNT_VALUE.checkValidity() === false) {
        OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else if (_verseCount>VERSE_MAX || _verseCount<VERSE_MIN) {
        OUTPUT.innerHTML = "<b><p>Please enter a number between 1 and 99</p></b>";
    } else {
        for (i = _verseCount; i>=2; i--) {
            OUTPUT.innerHTML += "<p>There are " + i +  " bottles of milk on the wall</p>";
            console.log (i)
        }
        i = 1;
        OUTPUT.innerHTML += "<p>There is 1 bottle of milk on the wall</p>";
    }


   
}




function getFormInput () {
    OUTPUT.innerHTML = "";
    SECOND_OUTPUT.innerHTML = "";
    const NAME = document.getElementById("Namefield");
    let _userName = (NAME.value)
    const MIN_LETTERS = 3;
    const AGE = document.getElementById("Agefield");
    let _userAge = Number(AGE.value);
    const MONEY = document.getElementById("Moneyfield");
    let _userMoney = Number(MONEY.value);
    const COST_CHOCOLATE = 4;
    getFormInputName()
    getFormInputAge()
    getFormInputMoney()
    
    userDetails.push({
        Name: _userName,
        Age: _userAge,
        pocketMoney: _userMoney
    })
    console.log(userDetails)

    function getFormInputAge () {
    if (AGE.checkValidity() === false) {
        OUTPUT.innerHTML += "<b><p>Only numbers can be entered into this field</p></b>";
    } else {
        OUTPUT.innerHTML += "<p>As of " + CURRENT_YEAR + " you are " + _userAge + " years old</p>";
        
    }
}
    function getFormInputName () {
        if (isNaN(NAME.value) === false) {
            OUTPUT.innerHTML = "<b><p>Numbers can not be inserted in this area</p></b>";
        
        } else if(_userName.length<MIN_LETTERS) {
            OUTPUT.innerHTML = "<b><p>Please insert a name at least 3 letters long</p></b>";
        
        } else {
            OUTPUT.innerHTML += "<p>Hi " + _userName + "</p>";
            
        
        }
    }

    function getFormInputChocolate () {
        const CHOCOLATE_LIKENESS = document.getElementById("Chocolatefield").value;
        let _chocoChoice = Number(CHOCOLATE_LIKENESS);
        const MIN_CHOCOLATE = -1;
        const MAX_CHOCOLATE = 4;
        if (CHOCOLATE_LIKENESS.checkValidity() === false) {
            OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
        } else if(_chocoChoice<MIN_CHOCOLATE || _chocoChoice>MAX_CHOCOLATE) {
            OUTPUT.innerHTML = "<b><p>Please enter a number between 1 and 99</p></b>";
        } else {
            Output.innerHTML = chocolateLike[_chocoChoice];
        }
        
    }

    function getFormInputMoney () {
        if (MONEY.checkValidity() === false) {
        OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
        } else {
            OUTPUT.innerHTML += "<p>You have " + _userMoney + " dollars</p>";
            
            if (_userMoney>=COST_CHOCOLATE) {
                OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
                OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
            } else if (_userMoney<COST_CHOCOLATE) {
                OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
                OUTPUT.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar</p>";
            }
        }

    
    }   

    

}



    

    





// function getFormInputMoney () {
//     if (MONEY.checkValidity() === false) {
//         OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
//     } else {
//         OUTPUT.innerHTML += "<p>You have " + _userMoney + " dollars</p>";
//         console.log(_userMoney)
//         if (_userMoney>=COST_CHOCOLATE) {
//             OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
//             OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
//         } else if (_userMoney<COST_CHOCOLATE) {
//             OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
//             OUTPUT.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar</p>";
//         }
//     }

    
// }

// function getFormInputName () {
// if (isNaN(NAME.value) === false) {
//         OUTPUT.innerHTML = "<b><p>Numbers can not be inserted in this area</p></b>";
        
//     } else if(_userName.length<MIN_LETTERS) {
//         OUTPUT.innerHTML = "<b><p>Please insert a name at least 3 letters long</p></b>";
        
//     } else {
//         OUTPUT.innerHTML += "<p>Hi " + _userName + "</p>";
//         console.log(_userName)
        
//     }
// }

// function start () {
//     OUTPUT.innerHTML = "";
//     SECOND_OUTPUT.innerHTML = "";
//     OUTPUT.innerHTML += "<h2>Added by Javascript</h2>";
//     OUTPUT.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
//     OUTPUT.innerHTML += "<p>You were born in " + (currentYear - userAge) + "</p>";
//     OUTPUT.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + "</p>";
//     OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars</p>";
//     OUTPUT.innerHTML += "<p>You spend half of your money and now you have " + (newMoney = (userMoney / 2)) + " dollar</p>";
//     OUTPUT.innerHTML += "<p>Then you get $3, now you have " + (newMoney + 3) + " dollars</p>";

// }

// function welcome() {
//     OUTPUT.innerHTML = "<h1>Welcome to the Shop</h1>";
//     console.log("h1")
// }

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>" +_name+ ": $" +_price+ "</p>";

}