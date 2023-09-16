// Calculator
// functions for operations
function sum(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function div(n1, n2) {
    return n1 / n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
// setting up variables
var number1 = "";
var number2 = "";
var displayNum = document.getElementById("displayNum");
var equalSign = document.getElementById("equal");
var isNum1Ready = false;
// function for forming numbers in display
function formNum(n) {
    if (!isNum1Ready) {
        number1 += n;
        displayNum.textContent=number1;
    }
    else {
        number2 += n;
        displayNum.textContent=number2;
    }
}
// function for equal sign, display the number in the screen, this is a higher order function
function cal(p1, p2, operation) {
    p2 = Number(p2);
    var result = operation(p1, p2);
    // console.log(result)
    // display the result in the screen
    displayNum.textContent=result;
}
// functions for clicking on each operation signs
function opSum() {
    number1 = Number(number1);
    isNum1Ready = true;
    // set the equal sign for onclick
    equalSign.setAttribute("onclick", "cal(number1, number2, sum)")
}
function opSub() {
    number1 = Number(number1);
    isNum1Ready = true;
    // set the equal sign for onclick
    equalSign.setAttribute("onclick", "cal(number1, number2, sub)")
}
function opDiv() {
    number1 = Number(number1);
    isNum1Ready = true;
    // set the equal sign for onclick
    equalSign.setAttribute("onclick", "cal(number1, number2, div)")
}
function opMul() {
    number1 = Number(number1);
    isNum1Ready = true;
    // set the equal sign for onclick
    equalSign.setAttribute("onclick", "cal(number1, number2, mul)")
}