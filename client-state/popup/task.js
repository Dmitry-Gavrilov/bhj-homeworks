
const modal = document.getElementById('subscribe-modal');
const modalClose = modal.querySelector('.modal__close');

const getCookie = (name) => {
	const value = '; ' + document.cookie;
	let parts = value.split('; ' + name + '=');
	if (parts.length === 2)
		return parts.pop().split(';').shift();
}

modalClose.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	document.cookie = 'modal=close; expires=Tue, 13 Sep 2022 05:12:08 GMT';
});

if (getCookie('modal') !== 'close') {
	modal.classList.add('modal_active')};
