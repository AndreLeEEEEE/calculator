const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiple = (x, y) => x * y;
const divide = (x, y) => x / y;

function operate(operator, x, y) {
    switch(opeartor) {
        case "+": 
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "*":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
            break;
        default:
            alert("No operator")
    }
}