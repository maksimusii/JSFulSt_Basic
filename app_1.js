//Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
//надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
//десятки и сотни. Например, для числа 245 надо получить следующий объект: 
//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
// соответствующее сообщение с помощью console.log и вернуть пустой объект.


'use strict';

console.log(transformNumber('789'));

function transformNumber(number) {

    let numObj = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0
    }

    if (number == "" || number == null) {
        console.log("Вы не ввели число");
        return numObj
    }
    if (!Number.isInteger(+number) || number < 0 || number > 999 || isNaN(number))   {
        console.log("Вы ввели неправильное число");
        return numObj
    }
    if (String(number).length == 2) {
        number = "0" + number;
    }
    if (String(number).length == 1) {
        number = "00" + number;
    }    
    
    numObj['единицы'] = String(number.charAt(2));
    numObj['десятки'] = String(number.charAt(1));
    numObj['сотни'] = String(number.charAt(0));

    return numObj;
}


