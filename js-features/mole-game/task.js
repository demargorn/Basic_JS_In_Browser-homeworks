'use strict';

const deadMoleCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
const holes = Array.from(document.querySelectorAll('.hole'));

holes.forEach((hole) => {
   hole.addEventListener('click', () => {
      if (hole.classList.contains('hole_has-mole')) {
         deadMoleCounter.textContent++;
      } else {
         lostCounter.textContent++;
      }

      if (Number(deadMoleCounter.textContent) === 10) {
         resetScore('Вы выиграли!');
      }

      if (Number(lostCounter.textContent) === 5) {
         resetScore('Вы проиграли!');
      }
   });
});

function resetScore(text) {
   deadMoleCounter.textContent = 0;
   lostCounter.textContent = 0;
   alert(text);
}
