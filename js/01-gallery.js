import {
    galleryItems
} from './gallery-items.js';


const gallery = document.querySelector('.gallery')
const itemsMarkup = createGalleryItem(galleryItems)

gallery.insertAdjacentHTML('beforeend', itemsMarkup)

function createGalleryItem(galleryItems) {
    return galleryItems.map(({
        preview,
        original,
        description
    }) => {
        return `
            <div class="gallery__item">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </div>
        `;
    }).join('')
}