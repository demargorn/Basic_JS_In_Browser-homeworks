'use strict';

const minusBtns = [...document.querySelectorAll('.product__quantity-control_dec')]; // массив кнопок уменьшения
const plusBtns = [...document.querySelectorAll('.product__quantity-control_inc')]; // массив кнопок увеличения
const addButtons = [...document.querySelectorAll('.product__add')]; // кнопки добавить в корзину
const basket = document.querySelector('.cart__products'); // корзина
let productId = 0;
let productCount = 1;
let productImg = '';

minusBtns.forEach((minusBtn) => {
   minusBtn.addEventListener('click', (e) => {
      if (productCount > 1) {
         productCount = --minusBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent;
      }
      productImg = minusBtn.closest('.product').querySelector('img').src;
      productId = minusBtn.closest('.product').dataset.id;
   });
});

plusBtns.forEach((plusBtn) => {
   plusBtn.addEventListener('click', (e) => {
      productCount = ++plusBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent;
      productImg = plusBtn.closest('.product').querySelector('img').src;
      productId = plusBtn.closest('.product').dataset.id;
   });
});

addButtons.forEach((addButton) => {
   addButton.addEventListener('click', (e) => {
      let product = `<div class="cart__product" data-id=${productId}>
                        <img class="cart__product-image" src=${productImg}>
                        <div class="cart__product-count">${productCount}</div>
                     </div>`;
      basket.insertAdjacentHTML('beforeend', product);
   });
});

// TODO:
// Если товар уже имеется в корзине, количество необходимо увеличить, не добавляя в корзину новый элемент.