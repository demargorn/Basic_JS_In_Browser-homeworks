'use strict';

class Progress {
   constructor(container) {
      this.container = document.querySelector(container);
      this.progress = this.container.querySelector('progress');
      this.form = this.container.querySelector('form');
      this.url = 'https://students.netoservices.ru/nestjs-backend/upload';
   }

   getFormData() {
      this.form.addEventListener('submit', (e) => {
         e.preventDefault();

         const data = new FormData(this.form);
         this.sendForm(data);
      });
   }

   changeProgress(e) {
      this.progress.value = e.loaded / e.total;
   }

   sendForm(data) {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
         this.changeProgress(e);
      });
      xhr.open('POST', this.url);
      xhr.send(data);
   }
}

new Progress('.card').getFormData();
