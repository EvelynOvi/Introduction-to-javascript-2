const isNumber = (number) => {
    if (isNaN(number))
        return isNumber(prompt("Input not a number, please enter a number: "))

    return parseFloat(number)
}



const isOperator = (op) => {
    if (!['+', '-', '*', '/'].includes(op))
        return isOperator(prompt("Please enter a valid operator( either +, -, * or / ): "))
    return op
}


const operator = isOperator(prompt('Enter operator to perform the calculation ( either +, -, * or / ): '));

const num1 = isNumber(prompt("Input first number: "));

const num2 = isNumber(prompt("Input second number: "));


let result; // declaration of the variable.

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else if (operator == '/') {
    result = num1 / num2;
}


window.alert(" Your operation: " + num1 + ' ' + operator + ' ' + num2 + ' ' + '= ' + result);