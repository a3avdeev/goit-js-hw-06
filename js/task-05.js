const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const handleInput = function (event) {
  if (inputText.value === "") {
    outputText.textContent = "Anonymous";
    console.log(inputText.textContent);
  } else outputText.textContent = event.currentTarget.value.trim();
  console.log(outputText.textContent);
};

inputText.addEventListener("input", handleInput);
