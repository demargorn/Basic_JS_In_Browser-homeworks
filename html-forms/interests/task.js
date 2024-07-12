'use strict';

const checkboxes = [...document.querySelectorAll('.interest__check')]; // чекбоксы

document.addEventListener('click', (e) => {
   if (e.target.checked) {
      setCheck();
   } else {
      unsetCheck();
   }
});

function setCheck() {
   checkboxes.forEach((checkbox) => {
      if (!checkbox.hasAttribute('indeterminate')) {
         checkbox.setAttribute('indeterminate', true);
      }
      checkbox.closest('label').querySelectorAll('.interests_active .interest__check').forEach((childCheckbox) => {
         childCheckbox.checked = true;
      });
   });
}

function unsetCheck() {
   checkboxes.forEach((checkbox) => {
      checkbox.removeAttribute('indeterminate');
      checkbox.checked = false;
      checkbox.closest('label').querySelectorAll('.interests_active .interest__check').forEach((childCheckbox) => {
         childCheckbox.checked = false;
      });
   });
}
