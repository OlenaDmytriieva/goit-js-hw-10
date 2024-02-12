'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import 'icomoon/style.css';

let userSelectedDate;
const btnStart = document.querySelector('button[data-start]');
const daysCounter = document.querySelector('span[data-days]');
const hoursCounter = document.querySelector('span[data-hours]');
const minutesCounter = document.querySelector('span[data-minutes]');
const secondsCounter = document.querySelector('span[data-seconds]');
btnStart.disabled = true;

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      userSelectedDate = selectedDates[0];
      btnStart.disabled = false;
    } else {
      iziToast.error({
        title: 'Error',
        titleColor: '#FFF',
        messageColor: '#FFF',
        message: 'Please choose a date in the future',
        backgroundColor: '#EF4040',
        // icon: 'icon-bi_x-octagon',
        // iconColor: '#fafafb',
        position: 'topRight',
        theme: 'dark',
        timeout: 5000,
      });
    }
  },
};

const inputEl = document.querySelector('#datetime-picker');
flatpickr(inputEl, flatpickrOptions);

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  startCountdown();
});

function startCountdown() {
  const intervalId = setInterval(() => {
    const ms = userSelectedDate - Date.now();
    if (ms <= 0) {
      clearInterval(intervalId);
      return;
    }
    const time = convertMs(ms);
    updateUI(time);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateUI(time) {
  daysCounter.textContent = addLeadingZero(time.days);
  hoursCounter.textContent = addLeadingZero(time.hours);
  minutesCounter.textContent = addLeadingZero(time.minutes);
  secondsCounter.textContent = addLeadingZero(time.seconds);
}
