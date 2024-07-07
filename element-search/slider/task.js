'use strict';

const right = document.querySelector('.slider__arrow_next'); // кнопка выправо
const left = document.querySelector('.slider__arrow_prev'); // кнопка влево
const items = Array.from(document.querySelectorAll('.slider__item')); // массив картинок

right.onclick = plusSlide;
left.onclick = minusSlide;

function plusSlide() {
   let idx = items.findIndex((slide) => slide.classList.contains('slider__item_active'));
   items[idx].classList.remove('slider__item_active');
   idx === items.length - 1 ? (idx = 0) : (idx += 1);
   items[idx].classList.add('slider__item_active');
} // функция листания картинок вправо

function minusSlide() {
   let idx = items.findIndex((slide) => slide.classList.contains('slider__item_active'));
   items[idx].classList.remove('slider__item_active');
   idx <= 0 ? (idx = items.length - 1) : (idx -= 1);
   items[idx].classList.add('slider__item_active');
} // функция листания картинок влево
