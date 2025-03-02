document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    let currentIndex = 0;
    let slideInterval;

    function updateSlider(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        slides[index].classList.add("active");
        dots[index].classList.add("active");
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateSlider(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(prevIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        // startAutoSlide();
    }

    rightArrow.addEventListener("click", function () {
        nextSlide();
        // resetAutoSlide();
    });

    leftArrow.addEventListener("click", function () {
        prevSlide();
        // resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            updateSlider(index);
            // resetAutoSlide();
        });
    });

    // startAutoSlide();
});
