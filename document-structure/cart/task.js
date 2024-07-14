'use strict';

const minusBtns = [...document.querySelectorAll('.product__quantity-control_dec')]; // массив кнопок уменьшения
const plusBtns = [...document.querySelectorAll('.product__quantity-control_inc')]; // массив кнопок увеличения
const addButtons = [...document.querySelectorAll('.product__add')]; // кнопки добавить в корзину
const basket = document.querySelector('.cart__products'); // корзина
let productId = 0;
let productCount = 1;
let productImg = '';

minusBtns.forEach((minusBtn) => {
   minusBtn.addEventListener('click', () => {
      if (productCount > 1) {
         productCount = --minusBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent;
      }
   });
});

plusBtns.forEach((plusBtn) => {
   plusBtn.addEventListener('click', () => {
      productCount = ++plusBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent;
   });
});

addButtons.forEach((addButton) => {
   addButton.addEventListener('click', (e) => {
      productImg = e.target.closest('.product').querySelector('img').src;
      productId = e.target.closest('.product').dataset.id;
      let product = `<div class="cart__product" data-id=${productId}>
                        <img class="cart__product-image" src=${productImg}>
                        <div class="cart__product-count">${productCount}</div>
                     </div>`;

      setTimeout(() => {
         const cardsInBasket = [...basket.querySelectorAll('.cart__product')]; // товары в корзине

         for (let i = 0; i < cardsInBasket.length; i += 1) {
            if (productId === cardsInBasket[i].dataset.id) {
               cardsInBasket[i].querySelector('.cart__product-count').textContent = productCount;
               return;
            }
         }
         basket.insertAdjacentHTML('beforeend', product);
      }, 200);
   });
});
