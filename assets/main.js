const logInBtn = document.querySelector('.log-in-icon-container');
const logInIcon = document.querySelector('.log-in-icon');
const closeIcon = document.querySelector('.log-in-close-icon');
const logInContainer = document.querySelector('.log-in-container');
const contentWindow = document.querySelector('.window');


logInBtn.addEventListener('click', () => {
    if (logInIcon.classList.contains('show-icon')) {
        logInBtn.classList.add('close-show-icon-container');
        logInIcon.classList.remove('show-icon');
        closeIcon.classList.add('close-show-icon');
        logInContainer.classList.add('active');
        contentWindow.classList.add('hide-window');
    } else {
        logInBtn.classList.remove('close-show-icon-container');
        closeIcon.classList.remove('close-show-icon');
        logInIcon.classList.add('show-icon');
        logInContainer.classList.remove('active');
        contentWindow.classList.remove('hide-window');
    }
});


const windowContainer = document.querySelector('.window-container');
const main = document.querySelector('main');
const start = document.querySelector('.inner-circle');
const steps = document.querySelector('.steps-icons');
const socialIcons = document.querySelector('.social-icons');
const smartphoneImg = document.querySelector('.smartphone-img');
const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');

start.addEventListener('click', () => {
    // steps.classList.add('show-steps');
    // socialIcons.classList.add('hide-social-icons');
    // smartphoneImg.style.animation = 'none';
    // setTimeout(() => {
    //     smartphoneImg.classList.add('hide-smartphone-img');
    // }, 100);
    // slide1.classList.add('hide-slide');
    // slide2.classList.add('show-brand-choice-slide');
    windowContainer.classList.add('window-container-zoom');
    main.classList.add('scroll-main');
});



window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    const elementToTrack = document.getElementById('slide2');
    const rect = elementToTrack.getBoundingClientRect();
    if (rect.bottom < 0) {
        windowContainer.classList.add('window-container-zoom');
        main.classList.add('scroll-main');
        steps.classList.add('show-steps');
        socialIcons.classList.add('hide-social-icons');
    } else {
        windowContainer.classList.remove('window-container-zoom');
        main.classList.remove('scroll-main');
        steps.classList.remove('show-steps');
        socialIcons.classList.remove('hide-social-icons');
    }

    const elementToTrackBottom = document.getElementById('slide-bottom');
    const rectBottom = elementToTrackBottom.getBoundingClientRect();
    if (rectBottom.bottom >= 0) {
        windowContainer.classList.remove('window-container-zoom');
    } else {
        windowContainer.classList.add('window-container-zoom');
    }
}, false);








// MOUVE IMAGE PAR RAPPORT A LA SOURIS
document.addEventListener('mousemove', (event) => {
    const dynamicImage = document.getElementById('dynamicImage');
    const { clientX, clientY } = event;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (centerX - clientX) * 0.05;
    const deltaY = (centerY - clientY) * 0.05;

    const rotation = ((centerX - clientX) / centerX) * 5;

    dynamicImage.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`;
});


