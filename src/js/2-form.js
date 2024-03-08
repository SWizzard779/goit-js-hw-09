const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const textInput = form.elements.message;
const emailInput = form.elements.email;

textInput.value = localStorage.getItem(localStorageKey) ?? '';
emailInput.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', event => {
  localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (validateForm()) {
    form.submit();
  } else {
    alert('Please fill in all the form fields in order to submit it!');
  }

  console.log({
    message: event.target.elements.message.value,
    email: event.target.elements.email.value,
  });

  localStorage.removeItem(localStorageKey);
  form.reset();
});

function validateForm() {
  return textInput.value.trim() !== '' && emailInput.value.trim() !== '';
}
