const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const iconoCerrar = document.querySelector('.icono-cerrar');

images.forEach(image => {
    image.addEventListener('click', () =>{
          addImage(image.getAttribute('src'), image.getAttribute('alt'));
    });
})

const addImage = (srcImage, alt) =>{
    containerImage.classList.toggle('move');
    imageContainer.src = srcImage;
}

iconoCerrar.addEventListener('click', () => {
    containerImage.classList.toggle('move');
});