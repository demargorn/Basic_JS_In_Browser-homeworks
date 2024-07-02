'use strict';

const rotatorCases = Array.from(document.querySelectorAll('.rotator__case')); // массив текстовых элементов

function rotator() {
   setInterval(nextRotatorCase, 1000);
}

function nextRotatorCase() {
   let idx = rotatorCases.findIndex((rotatorCase) => rotatorCase.classList.contains('rotator__case_active')); // индекс активного элемента
   rotatorCases[idx].classList.remove('rotator__case_active');

   if (idx === rotatorCases.length - 1) {
      idx = 0;
   } else {
      idx += 1;
   }
   rotatorCases[idx].classList.add('rotator__case_active');
}

rotator(); // ok