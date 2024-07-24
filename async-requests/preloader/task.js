'use strict';

const loader = document.getElementById('loader'); // анимашка
const items = document.getElementById('items'); // контейнер
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

fetch(url)
   .then((response) => response.json())
   .then((data) => {
      const valutes = data.response.Valute;

      for (const [code, value] of Object.entries(valutes)) {
         const item = document.createElement('div');
         const itemCode = document.createElement('div');
         const itemValue = document.createElement('div');
         const itemCurrency = document.createElement('div');

         item.classList.add('item');
         itemCode.classList.add('item__code');
         itemValue.classList.add('item__value');
         itemCurrency.classList.add('item__currency');

         itemCode.innerText = code;
         itemValue.innerText = value.Value;
         itemCurrency.innerText = value.Name;

         item.insertAdjacentElement('afterbegin', itemCurrency);
         item.insertAdjacentElement('afterbegin', itemValue);
         item.insertAdjacentElement('afterbegin', itemCode);
         items.insertAdjacentElement('afterbegin', item);
      }
      loader.classList.remove('loader_active');
   })
   .catch((error) => alert(error));
