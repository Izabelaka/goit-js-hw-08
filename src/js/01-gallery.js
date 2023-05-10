// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line

// console.log(galleryItems);
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = '';
for (const image of galleryItems) {
  const newImage = `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`;
  galleryEl.innerHTML += newImage;
}

document.addEventListener('DOMContentLoaded', function () {
  const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
  });
});
// ze strony https://simplelightbox.com/
