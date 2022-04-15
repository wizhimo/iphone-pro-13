import { products } from './data.js';

let items = document.querySelector('.items');

products.map(product => {
    // Create divs and containers for each product in products array
    let item = document.createElement('div');
    let itemUpper = document.createElement('div');
    let itemLower = document.createElement('div');
    let itemImg = document.createElement('img');
    let itemPrice = document.createElement('span');
    let itemName = document.createElement('h3');
    let buy = document.createElement('button');

    // insert values to each element
    itemImg.src = product.image;
    itemPrice.innerHTML = product.price;
    itemName.innerHTML = product.name;
    buy.innerHTML = 'Buy Now';

    // appending elements
    itemUpper.append(itemImg);
    itemUpper.append(itemName);
    itemLower.append(itemPrice);
    itemLower.append(buy);

    item.append(itemUpper);
    item.append(itemLower);

    items.append(item);

    // adding classes to elements
    item.classList.add('item');
    itemUpper.classList.add('itemUpper');
    itemLower.classList.add('itemLower');
})