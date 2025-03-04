const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelectorAll('.lightbox');

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightbox.querySelector('img').src = image.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});