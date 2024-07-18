'use strict';

const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip')); // слова с подсказками
const div = document.createElement('div'); // создаем элемент подсказки
div.classList.add('tooltip');
hasTooltips[0].insertAdjacentElement('afterEnd', div);

hasTooltips.forEach((hasTooltip) => {
   const text = hasTooltip.title; // текст подсказки
   const positionLeft = hasTooltip.getBoundingClientRect().left; // левая гранца нашего слова
   const positionTop = hasTooltip.getBoundingClientRect().bottom; // нижняя граница нашего слова

   hasTooltip.addEventListener('click', (e) => {
      e.preventDefault();

      div.style.left = positionLeft + 'px';
      div.style.top = positionTop + 'px';

      if (e.target.title === div.textContent) {
         div.classList.toggle('tooltip_active');
      } else {
         div.textContent = text;
         div.classList.add('tooltip_active');
      }
   });
});
