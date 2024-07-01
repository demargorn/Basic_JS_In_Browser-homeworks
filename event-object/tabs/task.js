'use strict';

const tabs = Array.from(document.querySelectorAll('.tab')); // массив вкладок
const content = Array.from(document.querySelectorAll('.tab__content')); // массив содержания вкладок

tabs.forEach((tab) => {
   tab.addEventListener('click', (e) => {
      const idx = tabs.findIndex((tab) => tab.classList.contains('tab_active')); // индекс активной вкладки
      const i = tabs.indexOf(tab); // индекс вкладки

      tabs[idx].classList.remove('tab_active');
      content[idx].classList.remove('tab__content_active');

      tab.classList.add('tab_active');
      content[i].classList.add('tab__content_active');
   });
});
