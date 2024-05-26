'use strict';

const counter = document.getElementById('clicker__counter');
const cookie = document.querySelector('.clicker__cookie');

cookie.onclick = () => {
   counter.textContent++;
   cookie.width = 400;
   setTimeout(() => cookie.width = 200, 200);
};