document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.querySelector('.lightbox');
    const images = document.querySelectorAll('.gallery img'); // Replace with correct class

    if (!lightbox) {
        console.error("Lightbox element not found!");
        return;
    }

    if (!images.length) {
        console.error("No images found!");
        return;
    }

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            const lightboxImg = lightbox.querySelector('img');
            if (lightboxImg) {
                lightboxImg.src = image.src;
            } else {
                console.error("No <img> inside lightbox!");
            }
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
});
