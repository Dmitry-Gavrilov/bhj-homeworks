const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const modalSuccess = document.getElementById('modal_success');
const showSuccess = modalMain.getElementsByClassName('show-success');

modalMain.className = "modal modal_active";

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => {
      modalMain.className = 'modal';
      modalSuccess.className = 'modal';
    }
}

for (let i = 0; i < showSuccess.length; i++) {
    showSuccess[i].onclick = () => {
        modalSuccess.className = "modal modal_active";
    }
}

