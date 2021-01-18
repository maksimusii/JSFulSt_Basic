//1. Реализовать страницу корзины:
// a.Добавить возможность не только смотреть состав корзины, но и редактировать его, 
//   обновляя общую стоимость или выводя сообщение «Корзина пуста».
//2. На странице корзины:
// a. Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
// b. Сделать эти поля сворачиваемыми;
// c. Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». 
//    Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.

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
let basketBtn = document.querySelector('.basketBtn');
let $basketCloseBtn = document.querySelector('.basketClose');   
let basketProducts = [];
let basket = document.querySelector('#basket');
let $basketContent = document.querySelector('#basketContent');
let $btnBasketForward = document.querySelectorAll('.forward');

basketBtn.addEventListener('click', function() {
  basket.classList.remove('divModalHidden');
  addBasketButtonHandler();
});

$basketCloseBtn.addEventListener('click', function() {
  basket.classList.add('divModalHidden');
});

const basketHeader = `
    <div class="basketHeader content">
        <p class="item">Имя</p>
        <p class="item">Цена</p>
        <p class="item">Количество</p>
    </div>
  `;


function getBasketProduct() {
  let $busketSumm = document.querySelector('#busketSumm');
  let basketContent = '';
  if (basketProducts.length != 0) {
    basketContent = `<div> В корзине: ${countBasketCount()} товаров на сумму ${countBasketPrice()} рублей </div>`;
    openBasketContent();
  } 
  $busketSumm.textContent = '';
  $busketSumm.insertAdjacentHTML('beforeEnd', basketContent);
  
}


let $basketDelivery = document.querySelector('#delivery');
let $basketComment = document.querySelector('#comments');

function addBasketHeaderHandler() {
  basket.addEventListener('click', function(evt) {
    switch (Number(evt.target.dataset.id)) {
      case 1:
        openBasketContent();
        break;
      case 2:
        openBasketDelivery();
        break;
      case 3:
        openBasketComments();
        break;
    };
  })
} 
addBasketHeaderHandler();

let $basketBtnForward = document.querySelectorAll('.basketControlBtn');
function openBasketContent() {

  $basketContent.classList.remove('divModalHidden');
  $basketDelivery.classList.add('divModalHidden');
  $basketComment.classList.add('divModalHidden');
  if (basketProducts.length != 0) {
    $basketBtnForward[0].classList.remove('btnBasketForwardHide');

  } else {
    $basketContent.textContent ='';
    $basketContent.insertAdjacentHTML('beforeend', '<div>Корзина пуста</div>');
  }
  $basketBtnForward[1].classList.add('btnBasketForwardHide');
  $basketBtnForward[2].classList.add('btnBasketForwardHide');
}
function openBasketDelivery() {
  if (basketProducts.length != 0) {
    $basketContent.classList.add('divModalHidden');
    $basketDelivery.classList.remove('divModalHidden');
    $basketComment.classList.add('divModalHidden');
    $basketBtnForward[0].classList.add('btnBasketForwardHide');
    $basketBtnForward[1].classList.remove('btnBasketForwardHide');
    $basketBtnForward[2].classList.add('btnBasketForwardHide');
  }
}
function openBasketComments() {
  if (basketProducts.length != 0) {
    $basketContent.classList.add('divModalHidden');
    $basketDelivery.classList.add('divModalHidden');
    $basketComment.classList.remove('divModalHidden');
    $basketBtnForward[0].classList.add('btnBasketForwardHide');
    $basketBtnForward[1].classList.add('btnBasketForwardHide');
    $basketBtnForward[2].classList.remove('btnBasketForwardHide');
  }
}
function addBasketButtonHandler() {
  $basketBtnForward[0].addEventListener('click', openBasketDelivery);
  $basketBtnForward[1].addEventListener('click', openBasketComments);
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
      <i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i>
    </div>
    `
  );
  $basketContent.insertAdjacentHTML('afterBegin', basketContent);
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
  $basketContent.textContent = ''; 
  getBusketContent();
  getBasketProduct();
  $basketContent.insertAdjacentHTML('afterBegin', basketHeader);
}
getBasketProduct();

function addRemoveBtnHandler() {
  //let $productRemoveBtn
  $basketContent.addEventListener('click', function(evt) {
   
    if(evt.target.tagName === 'I') {
      
      const productIndx = Number(evt.target.dataset.id);
      basketProducts = basketProducts.filter(function (basketProduct) {
        return basketProduct.id !== productIndx;
      });
      console.log(basketProducts);
      $basketContent.textContent = '';
      $basketBtnForward[0].classList.add('btnBasketForwardHide');
      getBusketContent();
      getBasketProduct();
    }
  });
}
addRemoveBtnHandler();
//4.* Для задачи со звездочкой из шестого урока реализовать функционал переключения между картинками по стрелкам на клавиатуре.


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
  document.onkeydown = checkKey;
}

function addModalHandler() {
  let closeButtons = document.querySelectorAll('.modalWindowsClose');
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', handlingModalWindowButtonClose);
  }
  let modalPictures = document.querySelectorAll('.divModal');
  for (let i = 0; i < modalPictures.length; i++) {
    modalPictures[i].addEventListener('click', handlingModalWindowRight);
  }
  picNumber = 0; 
}


function handlingModalWindowRight() {
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
function handlingModalWindowLeft() {
  let modalPictures = document.querySelectorAll('.divModal');
  if (picNumber == 0) {
    modalPictures[0].classList.add('divModalHidden');
    picNumber = modalPictures.length - 1;
    modalPictures[picNumber].classList.remove('divModalHidden');
  } else {
    modalPictures[picNumber-1].classList.remove('divModalHidden');
    modalPictures[picNumber].classList.add('divModalHidden');
    picNumber--;
  }
}


function handlingModalWindowButtonClose(evt) {
  document.querySelector('.modalWindowsClose').removeEventListener('click', handlingModalWindowButtonClose);
  evt.stopPropagation();
  modalWindow.classList.remove('modal_window');
  modalWindow.classList.add('modal_window_close');
  modalWindow.textContent = '';
}

function checkKey(ewt) {
  switch (ewt.key) {
    case 'ArrowRight':
      handlingModalWindowRight()
      break;
    case 'ArrowLeft':
      handlingModalWindowLeft()
      break;
  }
}