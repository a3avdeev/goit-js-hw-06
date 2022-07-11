const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handler = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
  console.log(slider.value);
};

slider.addEventListener("input", handler);
