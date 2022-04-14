let mainImg = document.querySelector('.mainImg');
let container = document.querySelector('.container');
let myUl = document.querySelector('.myUl');
let mobileBurger = document.querySelector('.mobileMenu');

let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
let row3 = document.querySelector('.row3');



function phones(src) {
    mainImg.src = src;
}

function colors(color) {
    container.style.background = color;
}

mobileBurger.addEventListener('click', () => {
    myUl.classList.toggle("menuDrop");
    row2.classList.toggle("row2After");
    row1.classList.toggle("row1After");
    row3.classList.toggle("row3After");

})