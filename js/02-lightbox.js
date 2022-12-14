import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryElem = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryElem.insertAdjacentHTML('afterbegin', markup);
function createMarkup(items) {
    return items.map(item => {
        return `
  <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    }).join('');
    
};
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'ALT', captionDelay: 250,
    });
    console.log(lightbox)