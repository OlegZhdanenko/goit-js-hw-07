function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color')
const spanChangeColor = document.querySelector(".color")

buttonChangeColor.addEventListener("click", onClick);

function onClick(event) {
  if (event.target) {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    spanChangeColor.textContent = color;
  }
}


















