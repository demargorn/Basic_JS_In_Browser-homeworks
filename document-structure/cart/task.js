'use strict';

const minusBtns = [...document.querySelectorAll('.product__quantity-control_dec')]; // массив кнопок уменьшения
const plusBtns = [...document.querySelectorAll('.product__quantity-control_inc')]; // массив кнопок увеличения
const addButtons = [...document.querySelectorAll('.product__add')]; // кнопки добавить в корзину
const basket = document.querySelector('.cart__products'); // корзина

minusBtns.forEach((minusBtn) => {
   minusBtn.addEventListener('click', (e) => {
      if (e.target.closest('.product__controls').querySelector('.product__quantity-value').textContent > 1) {
         --e.target.closest('.product__controls').querySelector('.product__quantity-value').textContent;
      }
   });
});

plusBtns.forEach((plusBtn) => {
   plusBtn.addEventListener('click', (e) => {
      ++e.target.closest('.product__controls').querySelector('.product__quantity-value').textContent;
   });
});

addButtons.forEach((addButton) => {
   addButton.addEventListener('click', (e) => {
      const productImg = e.target.closest('.product').querySelector('img').src;
      const productId = e.target.closest('.product').dataset.id;
      const product = `<div class="cart__product" data-id=${productId}>
                        <img class="cart__product-image" src=${productImg}>
                        <div class="cart__product-count">
                           ${e.target.closest('.product__controls').querySelector('.product__quantity-value').textContent}
                        </div>
                     </div>`;

      const inBasket = [...basket.querySelectorAll('.cart__product')].find((card) => card.dataset.id === productId); // находим товар в корзине

      if (inBasket) {
         inBasket.querySelector('.cart__product-count').textContent -= -e.target
            .closest('.product__controls')
            .querySelector('.product__quantity-value').textContent;
      } else {
         basket.insertAdjacentHTML('beforeend', product);
      }
   });
});
