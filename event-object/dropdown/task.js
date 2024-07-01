'use strict';

const items = Array.from(document.querySelectorAll('.dropdown__item')); // массив пунктов выпадающего списка
const button = document.querySelector('.dropdown__value'); // кнопка
const list = document.querySelector('.dropdown__list'); // выпадающий список

button.addEventListener('click', dropList);

function dropList() {
   list.classList.toggle('dropdown__list_active');
}

items.forEach((item) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      list.classList.toggle('dropdown__list_active');
      button.textContent = item.textContent;
   });
}); // ok
