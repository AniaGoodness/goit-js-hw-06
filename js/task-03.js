const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery");
const insertGallery = images.map(image => `<li><img src= ${image.url} alt= "${image.alt}"></li>`).join("");
galleryList.insertAdjacentHTML("beforeend", insertGallery);

galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.flexDirection = "column";
galleryList.style.justifyContent = "space-between";
const firstImageItem = document.querySelector("img");

firstImageItem.style.width = "300px";

const lastListItem= galleryList.lastElementChild;

const lastImage = lastListItem.querySelector("img");

lastImage.style.width = "300px";
const secondListItem = lastListItem.previousElementSibling;

const secondImage = secondListItem.querySelector("img");
secondImage.style.width = "300px";