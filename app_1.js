//1. Продолжаем реализовывать модуль корзины:
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

'use strict';

  // Генерация каталога  
let products = [
      {
        id: 3,
        name: 'MotherBoard',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: 200,
        img: 'https://placeimg.com/240/180/tech',
        big_img: ['https://placeimg.com/640/480/animals', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/tech']
      },
      {
        id: 4,
        name: 'Processor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: 20000,
        img: 'https://placeimg.com/240/180/tech',
        big_img: ['https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/arch']
      },
      {
        id: 1,
        name: 'RAM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: 1200,
        img: 'https://placeimg.com/240/180/tech',
        big_img: ['https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/nature']
      },
    ];
    
    let catalog = document.querySelector('#catalog');
    
    function getProductContent() {
      let productContent = '';
      products.forEach(product => 
        productContent += `
        <div class='product'>
        <div class='ProductName'>${product.name}</div>
        <img src='${product.img}' data-id='${product.id}'></img>
        <div>${product.description}</div>
        <p>Цена: ${product.price}</p>
        <button type="button" class='buyButton' data-id='${product.id}' data-price='${product.price}' data-name='${product.name}'>Купить</button>
        </div>
        `
      );
      catalog.insertAdjacentHTML('afterBegin', productContent);
    }  
    getProductContent();

//Генерация корзины
    
let basketProducts = [];
let basket = document.querySelector('#basket');
const basketHeader = `
    <div class="basketHeader content">
        <p class="item">Имя</p>
        <p class="item">Цена</p>
        <p class="item">Количество</p>
    </div>
  `;

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


function getBusketContent() {
  let basketContent = '';
  basketProducts.forEach(product => 
    basketContent += `
    <div class="basketHeader content">
      <p class="item">${product.name}</p>
      <p class="item">${product.price}</p>
      <p class="item">${product.count}</p>
    </div>
    `
  );
  basket.insertAdjacentHTML('afterBegin', basketContent);
} 

//Добавдени обработчика событий на кнопки купить

let btns = document.querySelectorAll('.buyButton');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', buyProduct);
}

function buyProduct(evt) {
  let id = evt.target.dataset.id;
  let price = evt.target.dataset.price;
  let name = evt.target.dataset.name;
  addProductToBasket({id: id, price: price, name: name});
}

//Функция добавления товаров в корзину

function addProductToBasket(product) {
  if (basketProducts.find(baketProduct => baketProduct.id === Number(product.id)) == undefined) {
    basketProducts.push({
          id: Number(product.id),
          price: Number(product.price),
          name: product.name,
          count: 1
      })
  } else {
    basketProducts.forEach(basketProduct => {
      if(basketProduct.id == product.id) {
        basketProduct.count++
      }
    });
  }
  basket.textContent = ''; 
  getBusketContent();
  getBasketProduct();
  basket.insertAdjacentHTML('afterBegin', basketHeader);
}

getBasketProduct();

//2.* У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
// b. Реализовать функционал перехода между картинками внутри модального окна.

let modalWindow = document.querySelector('#modal_window');
let  picNumber = 0; 
let imgs = document.querySelectorAll('img');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', openBigPicture);
}
function openBigPicture(evt) {
  modalWindow.classList.remove('modal_window_close');
  modalWindow.classList.add('modal_window');
  let divModalHiddenClass = '';
  let divModalWindowsContent = '';
  products.forEach(product => {
    if(product.id == evt.target.dataset.id) {
      for (let i = 0; i < product.big_img.length; i++) {
        divModalWindowsContent += `
        <div class="divModal ${divModalHiddenClass}">
        <button class='modalWindowsClose'>&times;</button>
        <img src='${product.big_img[i]}'>
        </div>
        `;
        divModalHiddenClass = 'divModalHidden';
      }
      
    }
  });
  modalWindow.insertAdjacentHTML('afterBegin', divModalWindowsContent);
  addModalHandler();
}

function addModalHandler() {
  let closeButtons = document.querySelectorAll('.modalWindowsClose');
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', handlingModalWindowButtonClose);
  }
  let modalPictures = document.querySelectorAll('.divModal');
  for (let i = 0; i < modalPictures.length; i++) {
    modalPictures[i].addEventListener('click', handlingModalWindow);
  }
  picNumber = 0; 
}


function handlingModalWindow() {
  let modalPictures = document.querySelectorAll('.divModal');

  if (picNumber == modalPictures.length - 1) {
    modalPictures[picNumber].classList.add('divModalHidden');
    picNumber = 0;
    modalPictures[picNumber].classList.remove('divModalHidden');
  } else {
    modalPictures[picNumber].classList.add('divModalHidden');
    modalPictures[picNumber+1].classList.remove('divModalHidden');
    picNumber++;
  }
}


function handlingModalWindowButtonClose(evt) {
  document.querySelector('.modalWindowsClose').removeEventListener('click', handlingModalWindowButtonClose);
  evt.stopPropagation();
  modalWindow.classList.remove('modal_window');
  modalWindow.classList.add('modal_window_close');
  modalWindow.textContent = '';
}