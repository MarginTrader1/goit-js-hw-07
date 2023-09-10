import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallaryContainer = document.querySelector(".gallery");

/* перебираем массив объектов через map, 
возвращается массив разметки, который "клеим" методом join() */

const images = galleryItems
   .map(
      ({ preview, original, description }) => ` 
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
   )
   .join("");

//вставляем разметку в тег c переменной gallaryContainer
gallaryContainer.innerHTML = images;

//инициализируем библиотеку
const gallaryLightboxContainer = new SimpleLightbox(".gallery a", {
   captionsData: "alt",
   captionPosition: "bottom",
   captionDelay: 250,
});
