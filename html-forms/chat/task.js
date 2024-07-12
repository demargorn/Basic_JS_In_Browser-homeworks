'use strict';

const chatWidget = document.querySelector('.chat-widget'); // окно чата
const chat = document.querySelector('.chat-widget__messages-container'); // активная область чата
const input = document.querySelector('.chat-widget__input'); // поле ввода
const messages = document.getElementById('chat-widget__messages'); // сообщения в чате
let hours = new Date().getHours().toString().padStart(2, '0'); // часы
let minutes = new Date().getMinutes().toString().padStart(2, '0'); // минуты
const robotMessages = [
   'Добрый день!',
   'Вас не слышно, прием!',
   'Говорите, говорите… я всегда зеваю, когда мне интересно!',
   'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
   'Вы еще здесь?',
   'Из положительных качеств у тебя только резус-фактор',
   'Это набор слов, или мне нужно вдуматься?',
   'Ну и ладно',
   'Может быть вместо этого хотите жаренных гвоздей?',
   'Дурдом на выезде, психи на природе!',
   'Прости что не оправдал твои стереотипы',
   'Какие вопросы, такие и ответы!',
];

chatWidget.addEventListener('click', showChat);
input.addEventListener('change', sendMessage);

function showChat() {
   chatWidget.classList.add('chat-widget_active');
}

function getRandomMessage(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

function sendMessage() {
   input.onkeyup = (e) => {
      if (e.code === 'Enter') {
         let clientMessage = `<div class="message message_client">
                                 <div class="message__time">${hours}:${minutes}</div>
                                 <div class="message__text">${e.target.value.trim()}</div>
                              </div>`;
         let robotMessage = `<div class="message">
                                 <div class="message__time">${hours}:${minutes}</div>
                                 <div class="message__text">${getRandomMessage(robotMessages)}</div>
                              </div>`;

         e.preventDefault();

         if (e.target.value === '') {
            alert('Поле не может быть пустым');
            return;
         }

         messages.innerHTML += clientMessage;
         input.value = '';

         setTimeout(() => {
            messages.innerHTML += robotMessage;
            chat.scrollBy(0, 500);
         }, 1000); // чуть оттянул ответ, так интереснее

         chat.scrollBy(0, 500);
      }
   };
}

setInterval(() => {
   if (chatWidget.classList.contains('chat-widget_active')) {
      messages.innerHTML += `<div class="message">
                                 <div class="message__time">${hours}:${minutes}</div>
                                 <div class="message__text">Вы еще здесь?</div>
                              </div>`;
      chat.scrollBy(0, 500);
   }
}, 30000); // не разобрался, как добавить условие отсутствия сообщения от пользователя
