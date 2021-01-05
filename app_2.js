//2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
//Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
//Пустая корзина должна выводить строку «Корзина пуста»;
//Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


'use strict';
    
let basketProducts = [
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
    
    let basket = document.querySelector('#basket');
    
    function getBasketProduct() {
      let basketContent = document.createElement("p");
      if (basketProducts.length != 0) {
        basketContent.textContent = 'В корзине: ' + countBasketCount() + ' товаров на сумму ' + countBasketPrice() + ' рублей';
      } else {
        basketContent.textContent = 'Корзина пуста';
      }
      basket.appendChild(basketContent);
    }

  function countBasketPrice() {
    let basketSum = 0;
    basketProducts.forEach(product => basketSum += product.price * product.count);
    return basketSum;
  }

  function countBasketCount() {
    let basketCount = 0;
    basketProducts.forEach(product => basketCount += product.count);
    return basketCount;
}

getBasketProduct();