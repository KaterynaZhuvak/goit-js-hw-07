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
  const imageSource = event.target.dataset.source;

  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const closeLightboxOnEscape = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${imageSource}" width="800" height="600">`,
    {
      onShow: (instance) =>
        window.addEventListener("keydown", closeLightboxOnEscape),
      onClose: (instance) =>
        window.removeEventListener("keydown", closeLightboxOnEscape),
    }
  );

  instance.show();
};

ulEl.insertAdjacentHTML("afterbegin", createListOfPictures(galleryItems));
ulEl.addEventListener("click", handleList);
