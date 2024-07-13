'use strict';

const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip')); // слова с подсказками

hasTooltips.forEach((hasTooltip) => {
   const text = hasTooltip.title; // текст подсказки
   const tooltipText = `<div class="tooltip">${text}</div>`;
   hasTooltip.insertAdjacentHTML('beforeend', tooltipText);

   hasTooltip.addEventListener('click', (e) => {
      e.preventDefault();

      hasTooltip.style.display = 'inline-block';
      e.target.querySelector('.has-tooltip div').classList.add('tooltip_active');
   });

   hasTooltip.addEventListener('blur', (e) => {
      e.target.querySelector('.has-tooltip div').classList.remove('tooltip_active');
   });
});
