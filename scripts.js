window.addEventListener("load", () => {
    Operate();
})

function Operate() {
    let operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');

    if (operator === null) {
        return;
    }

    while (!['+','-','*','/'].includes(operator)) {
        operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');
       

        if(operator === null){
            return;
        }
        
    }

   

    const isNumber = (number) => {
        if (isNaN(number)) {
            return false;
        }
        return true;
    }

    let inputtedFirstNumber = prompt("Enter the first number");
    if (inputtedFirstNumber === null) {
        return
    }
    while (!isNumber(inputtedFirstNumber)) {
        inputtedFirstNumber = prompt("Input a valid first number");
        if (inputtedFirstNumber === null) {
            return;
        }
    }



    let inputtedSecondNumber = prompt("Enter the second number");
    if (inputtedSecondNumber === null) {
        return;
    }

    while (!isNumber(inputtedSecondNumber)) {
        inputtedSecondNumber = prompt("Input a valid second number");
        if (inputtedSecondNumber === null) {
            return;
        }
    }

    const num1 = parseFloat(inputtedFirstNumber);
    const num2 = parseFloat(inputtedSecondNumber);



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


    window.alert(" Your operation: " + num1 + ' ' + operator + ' ' + num2 + ' ' + '= '  + result);
}
