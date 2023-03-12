const textInput = document.getElementById("validation-input");
const lengthOfInput = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
    if (event.target.value === lengthOfInput) {
    textInput.classList.replace("validation-input", "validation-input.valid"); }
    else {
     textInput.classList.replace("validation-input", "validation-input.invalid"); 
    }
}
);