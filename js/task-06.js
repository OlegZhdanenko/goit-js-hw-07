function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector("input");
const createBox = document.querySelector("button[data-create]");
const destroyBox = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes")

createBox.addEventListener("click", onCreateBtn);
destroyBox.addEventListener("click", onDestroyBtn);


function onCreateBtn(event) {
  const amount = input.value;
  createBoxes(amount);
}

function onDestroyBtn(event) {
destroyBoxes(event)
}

function createBoxes(amount) {
  let newBoxes = [];
  let boxSizing = 30;

  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div")
    divBox.classList.add("box-list")
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.width = `${boxSizing}px`;
    divBox.style.height = `${boxSizing}px`;
    boxSizing+=10
    newBoxes.push(divBox)
  };
    boxes.append(...newBoxes)
  };

function destroyBoxes(){
   boxes.innerHTML=''
 }















