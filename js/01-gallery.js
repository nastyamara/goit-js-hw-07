import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
galleryContainer.innerHTML = markup;

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {  
  if (event.target.nodeName !== 'IMG') {
    return;
  }


  const instance = basicLightbox.create(`
<img src=${event.target.dataset.source} width = "800' height = "600'>
`);
  instance.show();
  event.preventDefault();

//   window.addEventListener('keydown', onEscapePress)
//   function onEscapePress(event) {
//   if (event.code === "Escape") {
//     instance.close()
//      window.removeEventListener('keydown', onEscapePress)
// }
//  }


}
function createMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('')
 
}

