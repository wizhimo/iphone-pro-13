let mainImg = document.querySelector('.mainImg');
let container = document.querySelector('.container');
let myUl = document.querySelector('.myUl');
let mobileBurger = document.querySelector('.mobileMenu');




function phones(src) {
    mainImg.src = src;
}

function colors(color) {
    container.style.background = color;
}

mobileBurger.addEventListener('click', () => {
    myUl.classList.toggle("menuDrop");

})