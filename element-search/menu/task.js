'use strict';

const btnAbout = document.querySelectorAll('.menu__link')[1]; // кнопка О Компании
const btnServices = document.querySelectorAll('.menu__link')[5]; // кнопка Услуги

btnAbout.onclick = showAboutDropList;
btnServices.onclick = showServicesDropList;

function showAboutDropList(e) {
   e.preventDefault();
   document.querySelectorAll('.menu_sub')[0].classList.toggle('menu_active');

   if (document.querySelectorAll('.menu_sub')[1].classList.contains('menu_active')) {
      document.querySelectorAll('.menu_sub')[1].classList.toggle('menu_active');
   }
} // функция открытия выпадающего списка О Компании

function showServicesDropList(e) {
   e.preventDefault();
   document.querySelectorAll('.menu_sub')[1].classList.toggle('menu_active');

   if (document.querySelectorAll('.menu_sub')[0].classList.contains('menu_active')) {
      document.querySelectorAll('.menu_sub')[0].classList.toggle('menu_active');
   }
} // функция открытия выпадающего списка Услуги
