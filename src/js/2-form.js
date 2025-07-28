const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

let formData = {
  email: "",
  message: "",
};


populateForm();

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(event) {

  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    if (formData.email) emailInput.value = formData.email;
    if (formData.message) messageInput.value = formData.message;
  }
}

function onSubmit(event) {
  event.preventDefault();

  
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

 
  console.log("Form data submitted:", formData);

 
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
}