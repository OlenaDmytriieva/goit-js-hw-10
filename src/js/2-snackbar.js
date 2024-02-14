'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[name="delay"]');
// const radioBtn = document.querySelector('fieldset');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const radioBtn = document.querySelector('input[name="state"]:checked');
  const delay = input.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioBtn.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        icon: '',
        messageSize: '16px',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        icon: '',
        messageSize: '16px',
      });
    });
});
