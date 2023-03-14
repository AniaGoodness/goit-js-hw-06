function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanColor = document.querySelector("body");

const buttonChangeColor = document.querySelector('.change-color');



buttonChangeColor.addEventListener("click", (event) => {
	getRandomHexColor();
	spanColor.style.backgroundColor = getRandomHexColor();
});
  

