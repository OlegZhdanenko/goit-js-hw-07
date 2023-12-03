const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
event.preventDefault();
const form = event.target;
const email = form.elements.email.value;
const password = form.elements.password.value;
  
if (email === "" || password === "") {
    return alert('All form fields must be filled in');
    };
    
console.log(`Login: ${email.trim()}, Password: ${password.trim()}`);
form.reset();
}

























