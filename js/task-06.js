function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const controls = document.querySelector("#controls");
const createBox = document.querySelector("button[data-create]");
const destroyBox = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes")

controls.addEventListener("input", onInput);
createBox.addEventListener("click", createBoxes);
destroyBox.addEventListener("click", destroyBoxes);

let sizeBox = 0;
let numberOfInput = 0;;
let step = 30;

function onInput(event) {
  let evt = event.target.value;
  createBoxes(evt);
 
}




function createBoxes(amount) {
  for (let i = 0; i < amount; i+=1) {
    const divBox = document.createElement("div")
    divBox.classList.add("box-list")
  divBox.style.width = "30px";
  divBox.style.height = "30px";
    divBox.style.backgroundColor = getRandomHexColor();
      step += 10;
     divBox.style.width = `"${step}px"`;
    divBox.style.height = `"${step}px"`;
    console.log("step",step);
    boxes.append(divBox)
    console.log(divBox);
  };
  
  };

function destroyBoxes(){
   boxes.innerHTML=''
 }















