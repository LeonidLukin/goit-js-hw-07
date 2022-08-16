import {
    galleryItems
} from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const itemsMarkup = createGalleryItem(galleryItems)

gallery.insertAdjacentHTML('beforeend', itemsMarkup)
gallery.addEventListener('click', onGalleryClick)

function createGalleryItem(galleryItems) {
    return galleryItems.map(({
        preview,
        original,
        description
    }) => {
        return `
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                title="${description}"
            />
            </a>
        `;
    }).join('')
}

const lightbox = new SimpleLightbox('.gallery a', {});

function onGalleryClick(e) {
    e.preventDefault()

    const isGalleryImage = e.target.classList.contains('gallery__image')

    if (!isGalleryImage) {
        return
    }
}