let currentSlide = 1;
let autoSlideInterval;  



function showSlide(index) {
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;

    currentSlide += index;

    if (currentSlide > totalSlides) {
        currentSlide = 1;
    } else if (currentSlide < 1) {
        currentSlide = totalSlides;
    }

    const transformValue = -100 * (currentSlide - 1) + '%';
    slides.style.transform = 'translateX(' + transformValue + ')';

    updateDots();
}

function changeSlide(index) {
    showSlide(index);
    resetAutoSlide();  
}

function updateDots() {
    const dotsContainer = document.querySelector('.slider-dots');
    const dots = Array.from(dotsContainer.children);

    dots.forEach((dot, index) => {
        dot.classList.remove('active-dot');

        if (index === 0 && currentSlide !== 1) {
            dot.classList.add('hollow-dot');
        } else {
            dot.classList.remove('hollow-dot');
        }

        if (index + 1 === currentSlide) {
            dot.classList.add('active-dot');
        }
    });
}

function autoSlide() {
    changeSlide(1);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);  
    autoSlideInterval = setInterval(autoSlide, 5000);  
}

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;
    const dotsContainer = document.querySelector('.slider-dots');

    for (let i = 2; i <= totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }

    resetAutoSlide(); 
    updateDots();
});

document.addEventListener('DOMContentLoaded', function () {
    const dotsContainer = document.querySelector('.slider-dots');
    const dots = Array.from(dotsContainer.children);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index + 1; 
            showSlide(0); 
            resetAutoSlide();

            dots.forEach((dot) => {
                dot.classList.remove('active-dot');
            });

            dot.classList.add('active-dot');
        });
    });
});

function showContent(tab) {
    const nowPlayingCards = document.querySelectorAll('.now-playing');
    const comingSoonCards = document.querySelectorAll('.coming-soon');
    const nowLink = document.getElementById('nowLink');
    const soonLink = document.getElementById('soonLink');

    if (tab === 'now') {
        nowPlayingCards.forEach(card => card.style.display = 'flex');
        comingSoonCards.forEach(card => card.style.display = 'none');
        nowLink.classList.add('active');
        soonLink.classList.remove('active');
    } else if (tab === 'soon') {
        nowPlayingCards.forEach(card => card.style.display = 'none');
        comingSoonCards.forEach(card => card.style.display = 'flex');
        nowLink.classList.remove('active');
        soonLink.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const nowLink = document.getElementById('nowLink');
    const soonLink = document.getElementById('soonLink');

    nowLink.addEventListener('click', function (event) {
      event.preventDefault();
      showContent('now');
    });

    soonLink.addEventListener('click', function (event) {
      event.preventDefault();
      showContent('soon');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    showContent('now');
});

function changeBackgroundVK(isHover) {
    var imgElement = document.getElementById('vk');
    var isLightMode = document.body.classList.contains('light-mode');
    if (isHover && isLightMode) {
        imgElement.src = 'svg/vk-full-black.svg'; 
    } else if (isHover && !isLightMode) {
        imgElement.src = 'svg/vk-full-white.svg';
    } else if (!isHover && isLightMode) {
        imgElement.src = 'svg/vk-black.svg'; 
    } else {
        imgElement.src = 'svg/vk-white.svg'; 
    }
}

function changeBackgroundInst(isHover) {
    var imgElement = document.getElementById('instagram');
    var isLightMode = document.body.classList.contains('light-mode');
    if (isHover && isLightMode) {
        imgElement.src = 'svg/instagram-full-black.svg'; 
    } else if (isHover && !isLightMode) {
        imgElement.src = 'svg/instagram-full-white.svg';
    } else if (!isHover && isLightMode) {
        imgElement.src = 'svg/instagram-black.svg'; 
    } else {
        imgElement.src = 'svg/instagram-white.svg'; 
    }
}

function changeBackgroundFace(isHover) {
    var imgElement = document.getElementById('facebook');
    var isLightMode = document.body.classList.contains('light-mode');
    if (isHover && isLightMode) {
        imgElement.src = 'svg/facebook-full-black.svg'; 
    } else if (isHover && !isLightMode) {
        imgElement.src = 'svg/facebook-full-white.svg';
    } else if (!isHover && isLightMode) {
        imgElement.src = 'svg/facebook-black.svg'; 
    } else {
        imgElement.src = 'svg/facebook-white.svg'; 
    }
}

function changeBackgroundLink(isHover) {
    var imgElement = document.getElementById('linkedin');
    var isLightMode = document.body.classList.contains('light-mode');
    if (isHover && isLightMode) {
        imgElement.src = 'svg/linkedin-full-black.svg'; 
    } else if (isHover && !isLightMode) {
        imgElement.src = 'svg/linkedin-full-white.svg';
    } else if (!isHover && isLightMode) {
        imgElement.src = 'svg/linkedin-black.svg'; 
    } else {
        imgElement.src = 'svg/linkedin-white.svg'; 
    }
}

function updateBackgrounds() {
    changeBackgroundVK();
    changeBackgroundInst();
    changeBackgroundFace();
    changeBackgroundLink();
}

const menuCheckbox = document.getElementById('burger-checkbox');
const body = document.body;

menuCheckbox.addEventListener('change', function() {
  if (this.checked) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
