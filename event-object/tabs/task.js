let links = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.tab__content');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {

        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');

        links[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    })
}