'use strict';

const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip')); // слова с подсказками

hasTooltips.forEach((hasTooltip) => {
   const text = hasTooltip.title; // текст подсказки
   const positionLeft = hasTooltip.getBoundingClientRect().left; // левая гранца нашего слова
   const positionTop = hasTooltip.getBoundingClientRect().bottom; // нижняя граница нашего слова
   
   const div = document.createElement('div'); // создаем элемент подсказки
   div.classList.add('tooltip');
   div.textContent = text;

   hasTooltip.addEventListener('click', (e) => {
      e.preventDefault();

      div.style.left = positionLeft + 'px';
      div.style.top = positionTop + 'px';
      div.classList.add('tooltip_active');

      hasTooltip.insertAdjacentElement('afterEnd', div);
   });

   hasTooltip.addEventListener('blur', () => {
      div.remove();
   });
});
