'use strict';
// функция сложения
function summ(a, b) {
    return (a + b);
}
// функция вычитания
function sub(a, b) {
return (a - b);
}
// функция деления
function div(a, b) {
return (a / b);
}
// функция деления
function mul(a, b) {
return (a * b);
}

function matchOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return (summ(arg1, arg2));
        case "-":
            return (sub(arg1, arg2));
        case "/":
            return (div(arg1, arg2));
        case "*":
            return (mul(arg1, arg2));
    }

}

console.log(matchOperation(10, -6, "-"));