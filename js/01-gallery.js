import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

const createListOfPictures = (arr) =>
  arr
    .map(
      (item) => `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img class='gallery__image' src='${item.preview}' alt='${item.description}' data-source="${item.original}"/>
      </a>
 </li>`
    )
    .join("");

const handleList = (event) => {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  };

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  
  ulEl.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    instance.close();
  }
})
};

ulEl.insertAdjacentHTML("afterbegin", createListOfPictures(galleryItems));
ulEl.addEventListener("click", handleList);
