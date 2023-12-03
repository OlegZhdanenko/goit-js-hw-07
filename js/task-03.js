const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const defaultName = span.textContent;

input.addEventListener("input", (event) => {
    const inputName = event.currentTarget.value
    inputName.trim()
    if (!inputName.includes(" ")) {
     span.textContent = inputName;
    } else {
     span.textContent= defaultName
      
    }
});




