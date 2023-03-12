const mainCounter = document.querySelector('#counter');
console.log(mainCounter);

const decrementButton = mainCounter.querySelector("button");
console.log(decrementButton);
const incrementButton = mainCounter.lastElementChild;
console.log(incrementButton);


let totalValue = mainCounter.querySelector("span");
let startValue = 0;
console.log(startValue);
totalValue.innerHTML = startValue;

const handleDecrement = () => {
    startValue--;
    totalValue.innerHTML = startValue;
};

const handleIncrement = () => {
    startValue++;
    totalValue.innerHTML = startValue;
};
decrementButton.addEventListener("click", handleDecrement);
incrementButton.addEventListener("click", handleIncrement);
