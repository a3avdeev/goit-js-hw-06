function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", () => {
  span.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = span.textContent;
  console.log(span.textContent);
});
