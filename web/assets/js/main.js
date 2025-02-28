
// GLOBAL EVENT LISTENERS

window.addEventListener('DOMContentLoaded', () => {
})

window.addEventListener('load', () => {
    handleLoader();
})

// OTHER GENERAL FUNCTIONS

function handleLoader() {
    const loader = document.querySelector('.loader')
    loader.style.animationName = 'fade-out';
    setTimeout(() => {
        loader.style.display = 'none'
    }, 500)
}