const textInput = document.getElementById("validation-input");
const lengthOfInput = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {

    if (event.target.value.length === lengthOfInput) 
    {
    textInput.classList.add("valid"); 
    textInput.classList.remove("invalid");
    console.log(textInput);}
    else {
     textInput.classList.remove("valid"); 
     textInput.classList.add("invalid")
     console.log(textInput);
    }
}
);