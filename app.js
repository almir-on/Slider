// slides[0].classList.add('active'); // выбор первого слайда


function slidesPlagin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');  // получаем в slides массив из .slide

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();

            slide.classList.add('active');
        });
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

slidesPlagin(4);