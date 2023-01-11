let throttle = require('lodash.throttle');
let inputForm = document.querySelector('.feedback-form');
let inputEmail = inputForm.querySelector('label > input');
let inputText = inputForm.querySelector('label > textarea');

inputForm.addEventListener(
  'input',
  throttle(() => {
    let storedInput = {
      email: inputEmail.value,
      message: inputText.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(storedInput));
  }, 500)
);

let storedOutput = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state') === null) {
  inputEmail.value = '';
  inputText.value = '';
} else {
  inputEmail.value = storedOutput.email;
  inputText.value = storedOutput.message;
}

inputForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  inputEmail.value = '';
  inputText.value = '';
  localStorage.removeItem('feedback-form-state');
});