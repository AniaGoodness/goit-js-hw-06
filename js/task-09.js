function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanColor = document.querySelector('.color');
console.log(spanColor);
const buttonChangeColor = document.querySelector('.change-color');
console.log(buttonChangeColor);


buttonChangeColor.addEventListener("click", (event) => {
	getRandomHexColor();
	spanColor.style.backgroundColor = getRandomHexColor();
});
  

