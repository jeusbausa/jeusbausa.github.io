let toggleActive = 'border-secondaryBg bg-white bg-opacity-10 border-primaryBg border-opacity-100';
const slideUp = {
    distance: '3%',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in',
};

const slideDown2 = {
    distance: '5%',
    origin: 'bottom',
    opacity: 0,
};

const slideDown = {
    distance: '30%',
    origin: 'top',
    opacity: 0,
    easing: 'ease-in',
};

function toggleHambuger() {
    const hamberger = document.getElementsByClassName('hamburger');
    const middle = hamberger[0].children[1].classList.contains('opacity-100');
    hamberger[0].children[0].classList.toggle('rotate-45');
    hamberger[0].children[0].classList.toggle('translate-y-1.5');
    middle ? hamberger[0].children[1].classList.replace('opacity-100', 'opacity-0') : hamberger[0].children[1].classList.replace('opacity-0', 'opacity-100');
    hamberger[0].children[2].classList.toggle('-rotate-45');
    hamberger[0].children[2].classList.toggle('-translate-y-1.5');
    const navbarMobile = document.getElementById('navbarMobile');
    const isHidden = navbarMobile.classList.contains('hidden');
    isHidden ? navbarMobile.classList.replace('hidden', 'flex') : navbarMobile.classList.replace('flex', 'hidden');
}

function modalToggle() {
    const modalToggle = document.getElementById('modalTechStack');
    const body = document.querySelector('body');
    const isBodyOverflow = body.classList.contains('overflow-hidden');

    const isActive = modalToggle.classList.contains('hidden');
    isActive ? modalToggle.classList.replace('hidden', 'flex') : modalToggle.classList.replace('flex', 'hidden');
    isBodyOverflow ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden');
}


document.getElementById('about').addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

document.getElementById('work').addEventListener('click', () => {
    window.scroll({
        top: 750,
        left: 0,
        behavior: 'smooth',
    });
});

document.getElementById('projects').addEventListener('click', () => {
    window.scroll({
        top: 1600,
        left: 0,
        behavior: 'smooth',
    });
});

document.getElementById('contact').addEventListener('click', () => {
    window.scroll({
        top: 3600,
        left: 0,
        behavior: 'smooth',
    });
});

document.getElementById('about-mobile').addEventListener('click', () => {
    window.scroll({
        top: 600,
        left: 0,
        behavior: 'smooth',
    });
    toggleHambuger();
});

document.getElementById('work-mobile').addEventListener('click', () => {
    window.scroll({
        top: 1500,
        left: 0,
        behavior: 'smooth',
    });
    toggleHambuger();
});

document.getElementById('projects-mobile').addEventListener('click', () => {
    window.scroll({
        top: 2650,
        left: 0,
        behavior: 'smooth',
    });
    toggleHambuger();
});

document.getElementById('contact-mobile').addEventListener('click', () => {
    window.scroll({
        top: 6000,
        left: 0,
        behavior: 'smooth',
    });
    toggleHambuger();
});

function workOne() {
    document.querySelector('#work-gl').classList.remove('hidden');
    document.querySelector('#work-lgu').classList.add('hidden');
    document.querySelector('#work-btph').classList.add('hidden');
    document.querySelector('#gl').classList.add(...toggleActive.split(' '));
    document.querySelector('#lgu').classList.remove(...toggleActive.split(' '));
    document.querySelector('#btph').classList.remove(...toggleActive.split(' '));
    ScrollReveal().reveal('#work-gl', slideDown2);
}

function workTwo() {
    document.querySelector('#work-gl').classList.add('hidden');
    document.querySelector('#work-btph').classList.add('hidden');
    document.querySelector('#work-lgu').classList.remove('hidden');
    document.querySelector('#lgu').classList.add(...toggleActive.split(' '));
    document.querySelector('#gl').classList.remove(...toggleActive.split(' '));
    document.querySelector('#btph').classList.remove(...toggleActive.split(' '));
    ScrollReveal().reveal('#work-lgu', slideDown2);
}

function workThree() {
    document.querySelector('#work-gl').classList.add('hidden');
    document.querySelector('#work-lgu').classList.add('hidden');
    document.querySelector('#work-btph').classList.remove('hidden');
    document.querySelector('#gl').classList.remove(...toggleActive.split(' '));
    document.querySelector('#lgu').classList.remove(...toggleActive.split(' '));
    document.querySelector('#btph').classList.add(...toggleActive.split(' '));
    ScrollReveal().reveal('#work-btph', slideDown2);
}

; (() => {
    const mouseScroll = document.getElementById('mouseScroll');
    const topMenuMobile = document.getElementById('topMenuMobile');
    let lastScrollTop = 0;
    window.addEventListener(
        'scroll',
        function () {
            if (document.documentElement.scrollTop === 0) {
                mouseScroll.classList.remove('opacity-0');

            } else {
                mouseScroll.classList.add('opacity-0');

            }

            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // downscroll code
                topMenuMobile.classList.add('-translate-y-40');
            } else {
                // upscroll code
                topMenuMobile.classList.remove('-translate-y-40');
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
        false
    );

    document.querySelector('#btph').classList.add(...toggleActive.split(' '));
    ScrollReveal().reveal('.navbar', slideDown);
    ScrollReveal().reveal('.hero', { ...slideUp, interval: 100 });
    ScrollReveal().reveal('.section', { ...slideUp, viewFactor: 0.1 });
    ScrollReveal().reveal(' .app', { ...slideUp, viewFactor: 0.1 });
})();
