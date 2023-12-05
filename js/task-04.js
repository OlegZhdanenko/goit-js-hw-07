const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
event.preventDefault();
const form = event.target;
const email = form.elements.email.value.trim();
const password = form.elements.password.value.trim();
  
if (email === "" || password === "") {
    return alert('All form fields must be filled in');
    };
    
    const newObj = {
        Login: email,
        Password: password
    };
console.log(newObj);
form.reset();
}

























