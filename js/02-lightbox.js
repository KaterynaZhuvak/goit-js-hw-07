import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');

const renderList = (arr) => 
    arr.map(item => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`).join('');

const handleList = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

}


ulEl.insertAdjacentHTML('afterbegin', renderList(galleryItems));
ulEl.addEventListener('click', handleList)