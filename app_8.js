//С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень

function power(val, pow) {
    return (pow != 1) ? val * power(val, pow - 1) : val;
}

console.log(power(2, 3))