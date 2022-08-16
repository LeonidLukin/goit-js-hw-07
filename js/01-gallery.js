import {
    galleryItems
} from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const itemsMarkup = createGalleryItem(galleryItems)
const instance = basicLightbox.create(`<img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">`)

gallery.insertAdjacentHTML('beforeend', itemsMarkup)
gallery.addEventListener('click', onGalleryClick)
gallery.addEventListener('keydown', onCloseModalKeydown)

function createGalleryItem(galleryItems) {
    return galleryItems.map(({
        preview,
        original,
        description
    }) => {
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
        </div>
        `;
    }).join('')
}

function onGalleryClick(e) {
    e.preventDefault()

    const isGalleryImage = e.target.classList.contains('gallery__image')

    if (!isGalleryImage) {
        return
    }

    instance.show((instance) => instance.element().querySelector('img').src = e.target.dataset.source)
}

function onCloseModalKeydown(e) {
    if (!instance.visible() || e.keyCode !== 27) {
        return
    }

    instance.close()
}