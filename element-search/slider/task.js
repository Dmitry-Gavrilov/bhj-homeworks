
let next =  document.querySelector('.slider__arrow_next')
let prev =  document.querySelector('.slider__arrow_prev');
let slides = Array.from(document.querySelectorAll('.slider__item'));

let index = 0;

function hide() {
    for (let slider of slides) {
        slider.className = 'slider__item';
    }
}

function show() {
    slides[index].className = 'slider__item slider__item_active';
}

next.onclick = () => {
    index++;
    hide()
    if (index >= slides.length) {
        index = 0;
    }
    show() 
};
   
prev.onclick = () => {
    index--;
    hide()
    if (index  < 0) {
        index = slides.length - 1;
    }
    show() 
};

