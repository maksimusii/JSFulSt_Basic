//2.Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. 
//Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.

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
