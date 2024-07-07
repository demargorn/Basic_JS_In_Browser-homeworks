'use strict';

const rotatorCases = Array.from(document.querySelectorAll('.rotator__case')); // массив текстовых элементов
let idx = rotatorCases.findIndex((rotatorCase) => rotatorCase.classList.contains('rotator__case_active')); // индекс активного элемента

function nextRotatorCase() {
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
         setTimeout(nextRotatorCase, rotatorCases[idx].dataset.speed);
         break;
      case 'green':
         rotatorCases[idx].style.color = 'green';
         setTimeout(nextRotatorCase, rotatorCases[idx].dataset.speed);
         break;
      case 'blue':
         rotatorCases[idx].style.color = 'blue';
         setTimeout(nextRotatorCase, rotatorCases[idx].dataset.speed);
         break;
      case 'gray':
         rotatorCases[idx].style.color = 'gray';
         setTimeout(nextRotatorCase, rotatorCases[idx].dataset.speed);
         break;
      default:
         rotatorCases[idx].style.color = '#000';
   }
}

function rotator() {
   setInterval(nextRotatorCase, 3500);
}

rotator(); // ok
