function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const btnCreateBtn = document.querySelector("button[data-create]");
const btnDestroyBtn = document.querySelector("button[data-destroy]");

// console.log(btnCreateBtn);

inputEl.addEventListener("input", inputChange);
btnCreateBtn.addEventListener("click", createBoxes);
btnDestroyBtn.addEventListener("click", destroyBoxes);

function inputChange(amount) {
  inputEl.setAttribute("count", Number(amount.currentTarget.value));
}

let startBoxSize = 30;

function createBoxes() {
  let countBox = Number(inputEl.getAttribute("count"));
  for (let i = 0; i < countBox; i += 1) {
    startBoxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = startBoxSize + "px";
    newBox.style.width = startBoxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
}

function destroyBoxes() {
  const allNewBoxes = document.querySelectorAll(".new-box");
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  startBoxSize = 30;
}

/** вариант 2 */

// const mainDivEl = document.querySelector("#boxes");
// const createBtn = document.querySelector("button[data-create]");
// const destroyBtn = document.querySelector("button[data-destroy]");
// const inputEl = document.querySelector("#controls input");

// createBtn.addEventListener("click", () => {
//   createBoxes(inputEl.value);
// });

// destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   let boxSize = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");

//     box.style.backgroundColor = getRandomHexColor();
//     box.style.width = `${boxSize}px`;
//     box.style.height = `${boxSize}px`;

//     mainDivEl.append(box);
//     boxSize += 10;
//   }
// }

// function destroyBoxes() {
//   mainDivEl.innerHTML = "";
//   inputEl.value = "";
// }

/** Вариант 3 */

// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("#controls");
// const containerEl = document.querySelector("#boxes");

// createBtn.addEventListener("click", () => createBoxes(inputEl.value));
// destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   let size = 20;
//   const boxEl = [];

//   for (let i = 0; i < amount; i += 1) {
//     size = size + 10;
//     const box = document.createElement("div");
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     box.style.width = size + "px";
//     box.style.height = size + "px";
//     box.classList.add("box-item");
//     boxEl.push(box);
//   }
//   containerEl.append(...boxEl);
//   return containerEl;
// }

// function destroyBoxes() {
//   containerEl.innerHTML = "";
//   inputEl.value = "";
// }
