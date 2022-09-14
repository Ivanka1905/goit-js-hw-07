import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryElem = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryElem.insertAdjacentHTML('afterbegin', markup);
galleryElem.addEventListener('click', listenerClick);
function createMarkup(items) {
    return items.map(item => {
        return `<div class="gallery__item">
             <a class="gallery__link" href="${item.original}">
     <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    }).join('');
    
};

function listenerClick(event) {
    event.preventDefault();
    if (event.target.tagName !== 'IMG')
        return;
    console.log(event.target.dataset.source)
   const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
       {onShow: () => {document.addEventListener('keydown', targetKey)}, onClose: () => {document.removeEventListener('keydown', targetKey)}}
   )
    instance.show();
    function targetKey(event) {
        if (event.code === 'Escape') { instance.close(); }
    }

};
