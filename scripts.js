const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');

const num1 = parseFloat(prompt ('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));

let result; // declaration of the variable.

if (operator == '+') { 
    result = num1+  num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1* num2;
}
else {
    result = num1 / num2; 
}

 window.alert(" Result is" + result);
