// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const images = galleryItems.reduce((acc, item) => {
    const result =
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}" 
                    alt="${item.description}"
                    data-source="${item.original}"
                />
            </a>
        </div>`;
    return acc += result
}, ``)

gallery.insertAdjacentHTML('afterbegin', images)

const onClick = evt => {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return
    }
}

var lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: '250',
        captionPosition: 'bottom',
        captionsData: 'alt',
    })

gallery.addEventListener('click', onClick)