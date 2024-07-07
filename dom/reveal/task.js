'use strict';

window.onscroll = isInViewport;

function isInViewport() {
   const reveals = document.querySelectorAll('.reveal'); // блоки
   const viewportHeight = window.innerHeight; // высота view-порта

   reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top; // верх нашего блока
      const revealHeight = parseInt(getComputedStyle(reveal).height); // высота нашего блока

      if (revealTop <= viewportHeight) {
         reveal.classList.add('reveal_active');
      }
      if (revealTop <= -revealHeight || revealTop > viewportHeight) {
         reveal.classList.remove('reveal_active');
      }
   });
}
