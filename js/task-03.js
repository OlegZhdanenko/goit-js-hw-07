const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const defaultName = span.textContent;

input.addEventListener("input", (event) => {
    const inputName = event.currentTarget.value.trim();

    if (inputName==="") {
        span.textContent = defaultName;
    } else {
     span.textContent = inputName;
    }
});




