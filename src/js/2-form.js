const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: '',
  message: '',
};

const textInput = form.elements.message;
const emailInput = form.elements.email;

textInput.value = formData.message;
emailInput.value = formData.email;

function validateForm() {
  return textInput.value.trim() !== '' && emailInput.value.trim() !== '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData = { ...formData, [name]: value };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (validateForm(formData)) {
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill in all the form fields in order to submit it!');
  }

  console.log(formData);
});
