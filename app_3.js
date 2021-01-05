//3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
//Создать массив товаров (сущность Product);
//При загрузке страницы на базе данного массива генерировать вывод из него.
//HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

'use strict';
    
let products = [
        {
        id: 3,
        name: 'MotherBoard',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: 200,
        img: 'https://placeimg.com/240/180/tech'
        },
        {
        id: 4,
        name: 'Processor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: 20000,
        img: 'https://placeimg.com/240/180/tech'
        },
        {
        id: 1,
        name: 'RAM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: 1200,
        img: 'https://placeimg.com/240/180/tech'
        },
    ];
    
    let catalog = document.querySelector('#catalog');
    
    function getProductContent() {
      let productContent = '';
      products.forEach(product => 
        productContent += `
        <div class="product">
        <div class="ProductName">${product.name}</div>
        <img src="${product.img}"></img>
        <div>${product.description}</div>
        <p>Цена: ${product.price}</p>
        </div>
        `
      );
      catalog.insertAdjacentHTML('afterBegin', productContent);
    }  
      
    

    getProductContent();


