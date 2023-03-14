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

const mushroomsItem = document.createElement("li");
mushroomsItem.classList.add("item");
mushroomsItem.textContent = ingredients[1];

const garlicItem = document.createElement("li");
garlicItem.classList.add("item");
garlicItem.textContent = ingredients[2];

const tomatosItem = document.createElement("li");
tomatosItem.classList.add("item");
tomatosItem.textContent = ingredients[3];

const herbsItem = document.createElement("li");
herbsItem.classList.add("item");
herbsItem.textContent = ingredients[4];

const condimentsItem = document.createElement("li");
condimentsItem.classList.add("item");
condimentsItem.textContent = ingredients[5];


const firstList = document.querySelector("ul");
firstList.append(patatoesItem, mushroomsItem, garlicItem, tomatosItem, herbsItem, condimentsItem);

