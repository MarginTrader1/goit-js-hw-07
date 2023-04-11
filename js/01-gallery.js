import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createMarkup(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>`;
});

console.log(markup);

};




