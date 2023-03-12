const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const patatoesItem = document.createElement("li");
patatoesItem.textContent = ingredients[0];
patatoesItem.classList.add("item");
console.log(patatoesItem);
const mushroomsItem = document.createElement("li");
mushroomsItem.classList.add("item");
mushroomsItem.textContent = ingredients[1];
console.log(mushroomsItem);
const garlicItem = document.createElement("li");
garlicItem.classList.add("item");
garlicItem.textContent = ingredients[2];
console.log(garlicItem);
const tomatosItem = document.createElement("li");
tomatosItem.classList.add("item");
tomatosItem.textContent = ingredients[3];
console.log(tomatosItem);
const herbsItem = document.createElement("li");
herbsItem.classList.add("item");
herbsItem.textContent = ingredients[4];
console.log(herbsItem);
const condimentsItem = document.createElement("li");
condimentsItem.classList.add("item");
condimentsItem.textContent = ingredients[5];
console.log(condimentsItem);

const firstList = document.querySelector("ul");
firstList.append(patatoesItem, mushroomsItem, garlicItem, tomatosItem, herbsItem, condimentsItem);

