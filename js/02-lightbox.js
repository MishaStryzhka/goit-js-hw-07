import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};
const elAll = [];
// let url;
let alt;

galleryItems.map(galleryItem => {

    const elA = document.createElement('a');
    elA.classList.add('gallery__link');
    elA.setAttribute('href', galleryItem.original);
    
    const elImg = document.createElement('img');
    elImg.classList.add('gallery__image');
    elImg.setAttribute('src', galleryItem.preview);
    elImg.setAttribute('data-src', galleryItem.original)
    elImg.setAttribute('alt', galleryItem.description);

    elA.appendChild(elImg);
    elAll.push(elA);
});

refs.gallery.append(...elAll);

const lightbox = new SimpleLightbox('.gallery a', { 
                captionsData: 'alt',
                captionDelay: 250,
            });

