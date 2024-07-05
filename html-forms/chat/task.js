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
   'Дурдом на выезде, психи на природе!',
   'Прости что не оправдал твои стереотипы',
   'Какие вопросы, такие и ответы!',
];

chatWidget.addEventListener('click', showChat); // событие: показать окно чата
input.addEventListener('change', sendMessage); // событие: отправка сообщения в чат

function showChat() {
   chatWidget.classList.add('chat-widget_active');
} // функция показа окна чата

function getRandomMessage(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
} // функция генерации случайной фразы

function sendMessage() {
   input.onkeyup = (e) => {
      if (e.code === 'Enter') {
         e.preventDefault();

         let clientMessage = `<div class="message message_client">
                                 <div class="message__time">${hours}:${minutes}</div>
                                 <div class="message__text">${e.target.value.trim()}</div>
                              </div>`;
         let robotMessage = `<div class="message">
                                 <div class="message__time">${hours}:${minutes}</div>
                                 <div class="message__text">${getRandomMessage(robotMessages)}</div>
                              </div>`;

         if ((e.target.value = '')) {
            throw new Error('Поле не может быть пустым');
         } // !!!!

         messages.innerHTML += clientMessage;
         setTimeout(() => {
            messages.innerHTML += robotMessage;
            chat.scrollBy(0, 500);
         }, 1000); // чуть оттянул ответ, так интереснее
         chat.scrollBy(0, 500);
      }
   };
}

// отправка пустого сообщения?
