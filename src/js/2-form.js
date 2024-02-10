const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const input = form.elements.email;
const localStorageKey = 'feedback-form-state';

const savedSettings = () => {
  const parsedSettings = JSON.parse(localStorage.getItem(localStorageKey));
  if (parsedSettings) {
    input.value = parsedSettings.email || '';
    textarea.value = parsedSettings.message || '';
  }
};

savedSettings();

form.addEventListener('input', evt => {
  if (evt.target === input || evt.target === textarea) {
    const settings = {
      email: input.value.trim(),
      message: textarea.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(settings));
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (input.value.trim() !== '' && textarea.value.trim() !== '') {
    const settings = {
      email: input.value.trim(),
      message: textarea.value.trim(),
    };
    console.log(settings);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
