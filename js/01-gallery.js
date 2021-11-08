import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }).join('');
};

function onPaletteContainerClick(e) {
    e.preventDefault()
    const isColorSwatchEl = e.target.dataset.source
    console.log(isColorSwatchEl)
    if (!isColorSwatchEl) {
        return;
    }
  
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${isColorSwatchEl}" width="800" height="600">
    </div>`)
  instance.show()  
    
    document.addEventListener('keydown', function(event) {
    const key = event.key; 
    if (key === "Escape") {
        instance.close();
    }
});
    };

    