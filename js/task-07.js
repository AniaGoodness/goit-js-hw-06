const inputSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = inputSizeControl.value;

inputSizeControl.addEventListener("input", (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
});
