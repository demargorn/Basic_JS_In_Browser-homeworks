'use strict';

const modalGetGood = document.getElementById('modal_main'); // первое модальное окно
const modalGoodIsDone = document.getElementById('modal_success'); // второе модальное окно
const crossModalGetGood = document.querySelectorAll('.modal__close_times')[0]; // крестик красного окна
const crossModalGoodIsDone = document.querySelectorAll('.modal__close_times')[1]; // крестик зеленого окна
const buttonGetGood = document.querySelector('.show-success'); // кнопка 'сделать хорошо'
const buttonGoodIsDone = document.querySelector('.btn_success'); // кнопка 'хорошо сделано'

modalGetGood.classList.add('modal_active');

crossModalGetGood.onclick = closeModalGetGood;
buttonGetGood.onclick = showModalGoodIsDone;
crossModalGoodIsDone.onclick = closeModalGoodIsDone;
buttonGoodIsDone.onclick = closeModalGoodIsDone;

function closeModalGetGood() {
   modalGetGood.classList.remove('modal_active');
} // функция закрытия модального окна 'сделать хорошо'

function showModalGoodIsDone() {
   modalGetGood.classList.remove('modal_active');
   modalGoodIsDone.classList.add('modal_active');
} // функция закрытия модального окна сделать хорошо' и открытия модального окна 'хорошо сделано'

function closeModalGoodIsDone() {
   modalGoodIsDone.classList.remove('modal_active');
} // функция закрытия модального окна 'хорошо сделано'
