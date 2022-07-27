import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

const galleryEl = document.querySelector('.gallery')

const markup = galleryItems
    .map(
        ({ original, preview, description }) =>
            `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('')

galleryEl.insertAdjacentHTML('afterbegin', markup)

galleryEl.addEventListener('click', selectImg)

function selectImg(event) {
    event.preventDefault()

    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(`
		  <img src="${event.target.dataset.source}">
	`)
    instance.show()

    galleryEl.addEventListener('keydown', hideBigImg)

    function hideBigImg(event) {
        if (event.code === 'Escape') {
            instance.close()
        }
    }
}
