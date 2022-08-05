let minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let addBasket = Array.from(document.querySelectorAll('.product__add'));
let productsCard = document.querySelector('.cart__products');
let value = document.querySelectorAll('.product__quantity-value')

for(let i = 0; i < minus.length; i++ ) {
    minus[i].addEventListener(`click`, () => {
        value[i].innerHTML--;
        if (value[i].innerHTML < 1) {      
            value[i].innerHTML = 1;
        }
    })
}

for(let i = 0; i < plus.length; i++ ) {
    plus[i].addEventListener(`click`, () => {
        value[i].innerHTML++;
    })
}

addBasket.forEach((el) => {
    el.addEventListener('click', () => {
        const id = el.closest('.product').dataset.id;
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        const imgSrc = el.closest('.product').querySelector('.product__image').src;
        const value = el.closest('.product').querySelector('.product__quantity-value');
        const insideCart = cartProduct.find(element => id == element.dataset.id);
        //console.log(id); console.log(cartProduct); console.log(imgSrc); console.log(value); console.log(insideCart);

        if (insideCart == null) {
            productsCard.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src ="${imgSrc}">
            <div class="cart__product-count">${value.innerHTML}</div>
        </div>
        `)
        } else {
            const addValue = insideCart.lastElementChild;
            addValue.innerHTML = Number(addValue.innerHTML) + Number(value.innerHTML);
        }
    })
})

