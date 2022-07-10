const textInput = document.querySelector("input");
const inputLength = Number(textInput.getAttribute("data-length"));
console.log(inputLength);

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
    console.log("valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
    console.log("invalid");
  }
});
