'use strict';

const poolAnswers = document.getElementById('poll__answers'); // контейнер кнопок
const poolTitle = document.getElementById('poll__title'); // заголовок
const url = 'https://students.netoservices.ru/nestjs-backend/poll'; // url
const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.getResponseHeader('Content-Type', 'application/json');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      const response = xhr.response;
      poolTitle.innerText = response.data.title;

      for (let i = 0; i < response.data.answers.length; i += 1) {
         const btn = document.createElement('button');
         btn.classList.add('poll__answer');
         btn.style.marginRight = '10px';

         btn.innerText = response.data.answers[i];
         poolAnswers.insertAdjacentElement('afterend', btn);
      }

      const buttons = document.querySelectorAll('.poll__answer'); // кнопки ответа
      buttons.forEach((button, i) => {
         button.onclick = () => {
            alert('Спасибо, ваш голос засчитан!');
         };
      });
   }
});
xhr.send();
