const userInput = document.querySelector("#user-input");
const result = document.querySelector("#results-div");
const checkButton = document.querySelector("#check-btn");
const clearButton = document.querySelector("#clear-btn");
const para = document.createElement("BR");
const resultId = document.getElementsByTagName("div");


regex = /[0-9()-\s]/;
regexNumber = /[0-9]/;
regextParentLeft = /[(]/;
regexParentRight = /[)]/;
regexHyphen = /[-]/;

function hyphenCheck(number){
    let hyphenCount = 0;
    for (let i = 0; i < number.length; i++){
        if (number[i].match(regexHyphen)){
            hyphenCount++;
        }
}
    if (hyphenCount > 2){
        return false;
    } else {
        return true;
    }
}

function parenthesisCheck(number){
    let leftParent = 0;
    let rightParent = 0;
    let leftParentPosition = number.indexOf("(");
    let rightParentPosition = number.indexOf(")");
    let parentDifference = rightParentPosition - leftParentPosition;

    for (let i = 0; i < number.length; i++){
        if (number[i].match(regextParentLeft)){
            if (rightParent === 0){
            leftParent++;
            } else {
                return false;
            }
        } else if (number[i].match(regexParentRight)){
            rightParent++;
        }
    }
    if (leftParent > 0 && parentDifference === 4){
        return true;
    } else if (leftParent > 0 || rightParent > 0){
        return false;
    } else if (leftParent === rightParent){
        return true;
        }
}


function numberCheck(number){
    let inputNumber = "";
    let numberCount = 0;
    for (let i = 0; i < number.length;i++ ){
        if (number[i].match(regex)){
            inputNumber += number[i];
            if (number[i].match(regexNumber)){
                numberCount++;
            }
        } else {
            return false;
        }
    }
    if (numberCount === 11){
        if (inputNumber[0] != "1"){
            return false;
        } else {
            return true;
        }
    } else if (numberCount === 10){
        return true;
    } else {
        return false;
    }
}


function validNumber(){
    if (numberCheck(userInput.value) && parenthesisCheck(userInput.value) && hyphenCheck(userInput.value)){
        result.style.display = "block";
        return result.innerHTML = "Valid US number: " + userInput.value;
    } else if (userInput.value.length < 1){
        result.style.display = "block";
        return alert("Please provide a phone number");
    } else {
        result.style.display = "block";
       return result.innerHTML = "Invalid US number: " + userInput.value;
    }
}
function clearBox(){
    result.style.display = "none"; 
    return result.innerHTML = "";
}