'use strict';

const rotatorCases = Array.from(document.querySelectorAll('.rotator__case')); // массив текстовых элементов
let delay = 1000;
let count = 0;

function toggleClass() {
   rotatorCases.forEach((element) => element.classList.remove('rotator__case_active'));
   rotatorCases[count].classList.add('rotator__case_active');
   count = rotatorCases[count].nextElementSibling ? count + 1 : 0;
   delay = rotatorCases[count].getAttribute('data-speed');
   let color = rotatorCases[count].getAttribute('data-color');
   rotatorCases[count].setAttribute('style', `color: ${color}`);
   setTimeout(toggleClass, delay);
}
setTimeout(toggleClass, delay);
