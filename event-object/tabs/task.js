'use strict';

const tabs = Array.from(document.querySelectorAll('.tab')); // массив вкладок
const content = Array.from(document.querySelectorAll('.tab__content')); // массив содержания вкладок

tabs.forEach((tab) => {
   tab.addEventListener('click', (e) => {
      const idx = tabs.indexOf(tab); // индекс вкладки

      if (tab.classList.contains('tab_active')) {
         tab.classList.remove('tab_active');
         content[idx].classList.remove('tab__content_active');
         e.preventDefault();
      } else {
         tab.classList.add('tab_active');
         content[idx].classList.add('tab__content_active');
      }
   });
}); // почти ок, не выключается предыдущая активная вкладка при переключении
