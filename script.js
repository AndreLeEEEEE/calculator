const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiple = (x, y) => x * y;
const divide = (x, y) => x / y;

function operate(currentOperator) {
    storedValue = getDisplay();
    if (storedOperator) {
        switch(storedOperator) {
            case "+":
                alert(storedValue);
                alert(getDisplay());
                updateDisplay(add(storedValue, getDisplay()));
                break;
            case "-":
                updateDisplay(subtract(storedValue, getDisplay()));
                break;
            case "*":
                updateDisplay(multiply(storedValue, getDisplay()));
                break;
            case "/":
                updateDisplay(divide(storedValue, getDisplay()));
                break;
            default:
                alert("Unreached")
        }
        storedOperator = "";
    }
    else {storedOperator = currentOperator;}
}

function pressEqual() {
    if (storedOperator) {
        operate();
    }
}

function pressNumber(numberKey) {
    updateDisplay(numberKey);
}

function clearDisplay() {
    updateDisplay("", true);
    storedValue = "";
    storedOperator = "";
}

function updateDisplay(displayValue, replaceDisplay = false) {
    if (!replaceDisplay) {
        let tempDisplay = document.querySelector("#display").textContent
        displayValue = tempDisplay.toString() + displayValue.toString();
    }
    document.querySelector("#display").textContent = displayValue;
}

function getDisplay() {
    return Number(document.querySelector("#display").textContent)
}

let storedValue;
let storedOperator;

/*
Get number, put number into displayValue 
Get operator, store displayValue into storedValue
Get number, put number into currentValue, apply operator to displayValue and currentValue
Repeat the previous two steps for some amount of time
On equal, finalize displayValue
 */