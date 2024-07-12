'use strict';

const taskList = document.getElementById('tasks__list'); // список задач
const form = document.getElementById('tasks__form'); // форма
const input = document.getElementById('task__input'); // поле ввода
const btn = document.getElementById('tasks__add'); // кнопка Добавить

btn.addEventListener('click', (e) => {
   e.preventDefault();
   let newTask = `<div class="task">
                  <div class="task__title">${input.value}</div>
                  <a href="#" class="task__remove">&times;</a>
               </div>`;
   if (!input.value) {
      alert('Введите новую задачу');
      return;
   }
   taskList.insertAdjacentHTML('beforeend', newTask);

   const removes = taskList.querySelectorAll('.task__remove'); // кнопки Удаления
   removes.forEach((remove) => {
      remove.onclick = (e) => e.target.closest('.task').remove();
   });
   form.reset();
});
