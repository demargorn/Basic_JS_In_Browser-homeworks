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

   switch (rotatorCases[idx].dataset.color) {
      case 'red':
         rotatorCases[idx].style.color = 'red';
         break;
      case 'green':
         rotatorCases[idx].style.color = 'green';
         break;
      case 'blue':
         rotatorCases[idx].style.color = 'blue';
         break;
      case 'gray':
         rotatorCases[idx].style.color = 'gray';
         break;
      default:
         rotatorCases[idx].style.color = '#000';
   }
}

rotator(); // ok
