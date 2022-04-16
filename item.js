import { products } from './data.js';

window.onload = function() {

    let myUl = document.querySelector('.myUl');
    let mobileBurger = document.querySelector('.mobileMenu');
    let row1 = document.querySelector('.row1');
    let row2 = document.querySelector('.row2');
    let row3 = document.querySelector('.row3');

    mobileBurger.addEventListener('click', () => {
        myUl.classList.toggle("menuDrop");
        row2.classList.toggle("row2After");
        row1.classList.toggle("row1After");
        row3.classList.toggle("row3After");
    })

    let itemId = sessionStorage.getItem('itemId');
    let itemImg = document.querySelector('.itemInfo img');
    let itemName = document.querySelector('.itemName');
    let itemPrice = document.querySelector('.itemPrice');

    products.map(p => {
        if (p.id == itemId) {

            itemImg.src = p.image;
            itemName.innerHTML = p.name;
            itemPrice.innerHTML = p.price;

        }
    })
}