const numberOfCategories = document.querySelectorAll(".item");

const firstList = document.querySelector("ul");

console.log(`Number of categories: ${numberOfCategories.length}`);

const firstCategory = document.querySelector("h2");

console.log(`Category: ${firstCategory.textContent}`);
console.log(`Elements: ${firstList.querySelector("ul").children.length}`);

const allChildrenFirtsList = firstList.childNodes;
const secondCategory = allChildrenFirtsList[3];
const secondCategoryTitle = secondCategory.querySelector("h2");
console.log(`Category: ${secondCategoryTitle.textContent}`);

const nextSecondListItems = secondCategory.querySelectorAll("li");
console.log(`Elements: ${nextSecondListItems.length}`);

const thirdList= firstList.lastElementChild;
const thirdCategory = thirdList.querySelector('h2');
console.log(`Category: ${thirdCategory.textContent}`)
const thirdListItems = thirdList.querySelectorAll("li");
console.log(`Elements: ${thirdListItems.length}`);
