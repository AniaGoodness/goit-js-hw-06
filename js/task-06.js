const textInput = document.getElementById("validation-input");
const lengthOfInput = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
    console.log(event.target.value.length);
    if (event.target.value.length === lengthOfInput) 
    {
    textInput.classList.replace("validation-input", "validation-input.valid"); }
    else {
     textInput.classList.replace("validation-input", "validation-input.invalid"); 
    }
}
);