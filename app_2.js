//2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

'use strict';

let basketSum = 0;
let basket = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];

basket.forEach(product => basketSum += product.price);
console.log(basketSum);