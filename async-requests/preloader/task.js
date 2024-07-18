'use strict';

const loader = document.getElementById('loader'); // анимашка
const items = document.getElementById('items'); // контейнер
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

xhr.open('GET', url);
xhr.getAllResponseHeaders('Content-Type', 'application/json');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      const res = xhr.response;
      const valutes = res.response.Valute;

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
   }
});
xhr.send();
