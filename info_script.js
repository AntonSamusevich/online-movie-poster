let currentSlide = 1;
let autoSlideInterval;  

function toggleTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.classList.toggle('dark');
    const oval = document.querySelector('.menu .theme-toggle');
    oval.classList.toggle('dark');
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateBackgrounds()
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    if (savedTheme === 'dark') {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
    updateBackgrounds()

    if (savedTheme === 'light') {
        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.classList.add('dark');
        const oval = themeToggle.querySelector('.oval');
        oval.classList.add('moved');
    }
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
