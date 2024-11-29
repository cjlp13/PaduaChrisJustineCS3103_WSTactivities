document.querySelectorAll('.inner-container').forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('flipped');
    });
});