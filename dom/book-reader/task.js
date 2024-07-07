'use strict';

const fonts = Array.from(document.querySelectorAll('.font-size')); // массив кнопок переключения размера шрифта
const fontColors = Array.from(document.querySelectorAll('.book__control_color .color')); // массив кнопок переключения цвета шрифта
const bgColors = Array.from(document.querySelectorAll('.book__control_background .color')); // массив кнопок переключения цвета фона
const book = document.getElementById('book'); // читалка

window.addEventListener('click', changeSize);
window.addEventListener('click', changeFontColor);
window.addEventListener('click', changeBackgroundColor);

function changeSize(e) {
   const idx = fonts.findIndex((font) => font.classList.contains('font-size_active')); // индекс кнопки активного размера шрифта

   e.preventDefault();

   fonts.forEach((font) => {
      font.onclick = () => {
         fonts[idx].classList.remove('font-size_active');

         if (font.dataset.size === 'small') {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
            font.classList.add('font-size_active');
         }
         if (!font.dataset.size) {
            book.classList.remove('book_fs-big', 'book_fs-small');
            font.classList.add('font-size_active');
         }
         if (font.dataset.size === 'big') {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
            font.classList.add('font-size_active');
         }
      };
   });
}

function changeFontColor(e) {
   const idx = fontColors.findIndex((fontColor) => fontColor.dataset.textColor); // индекс кнопки цвета шрифта

   e.preventDefault();

   fontColors.forEach((fontColor) => {
      fontColor.onclick = () => {
         fontColors[idx].classList.remove('color_active');

         if (fontColor.dataset.textColor === 'black') {
            book.classList.add('book_color-black');
            book.classList.remove('book_color-whitesmoke', 'book_color-gray');
            fontColor.classList.add('color_active');
         }
         if (fontColor.dataset.textColor === 'gray') {
            book.classList.add('book_color-gray');
            book.classList.remove('book_color-whitesmoke', 'book_color-black');
            fontColor.classList.add('color_active');
         }
         if (fontColor.dataset.textColor === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
            book.classList.remove('book_color-gray', 'book_color-black');
            fontColor.classList.add('color_active');
         }
      };
   });
}
function changeBackgroundColor(e) {
   const idx = bgColors.findIndex((bgColor) => bgColor.dataset.bgColor); // индекс кнопки цвета фона

   e.preventDefault();

   bgColors.forEach((bgColor) => {
      bgColor.onclick = () => {
         bgColors[idx].classList.remove('color_active');

         if (bgColor.dataset.bgColor === 'black') {
            book.classList.add('book_bg-black');
            book.classList.remove('book_bg-white', 'book_bg-gray');
            bgColor.classList.add('color_active');
         }
         if (bgColor.dataset.bgColor === 'gray') {
            book.classList.add('book_bg-gray');
            book.classList.remove('book_bg-white', 'book_bg-black');
            bgColor.classList.add('color_active');
         }
         if (bgColor.dataset.bgColor === 'white') {
            book.classList.add('book_bg-white');
            book.classList.remove('book_bg-gray', 'book_bg-black');
            bgColor.classList.add('color_active');
         }
      };
   });
}
