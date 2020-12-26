//3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

'use strict';

let basketSum = 0;
let basket = [
    {
    id: 3,
    count: 3,
    price: 200,
    },
    {
    id: 4,
    count: 2,
    price: 900,
    },
    {
    id: 1,
    count: 6,
    price: 1000,
    },
];

console.log(countBasketPrice(basket));

function countBasketPrice(basket) {
    let basketSum = 0;
    basket.forEach(product => basketSum += product.price * product.count);
    return basketSum;
}
