'use strict';

const poolAnswers = document.getElementById('poll__answers'); // контейнер кнопок
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll'; // url

xhr.open('GET', url);
xhr.getResponseHeader('Content-Type', 'application/json');

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      const response = JSON.parse(xhr.responseText);
      poolAnswers.innerText = response.data.title;

      for (let i = 0; i < response.data.answers.length; i += 1) {
         const btn = document.createElement('button');
         btn.classList.add('poll__answer');
         btn.style.marginRight = '10px';

         btn.innerText = response.data.answers[i];

         poolAnswers.insertAdjacentElement('afterend', btn);
         btn.onclick = () => alert('Спасибо, ваш голос засчитан!');
      }
   }
});
xhr.send();
