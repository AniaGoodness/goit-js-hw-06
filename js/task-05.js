const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", (event) => {
    if (nameInput !== event.currentTarget.value) {
    nameOutput.textContent = event.target.value;
} else {
    nameOutput.textContent = "Anonymus";
}
}
);
