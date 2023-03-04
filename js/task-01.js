const numberOfCategories = document.querySelectorAll(".item");

//const newArray = [...numberOfCategories];

console.log(`Number of categories: ${numberOfCategories.length}`);

const firstCategory = document.querySelector("h2");

console.log(`Category: ${firstCategory.textContent}`);

const firstList = document.querySelector("ul");

const secondList = firstList.querySelector("ul");
const secondListItems = secondList.children;
console.log(`Elements: ${secondListItems.length}`);

const thirdList= firstList.lastElementChild;
const thirdCategory = thirdList.querySelector('h2');
console.log(`Category: ${thirdCategory.textContent}`)
const thirdListItems = thirdList.querySelectorAll("li");
console.log(`Elements: ${thirdListItems.length}`);
