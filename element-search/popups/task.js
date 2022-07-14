const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnX = Array.from(document.getElementsByClassName('modal__close modal__close_times'));
const btnRed = Array.from(document.getElementsByClassName('btn btn_danger modal__close show-success'));

modalMain.className = "modal modal_active";

for (let i = 0; i < btnRed.length; i++) {
   btnRed[i].addEventListener('click', () => {
   modalMain.className = 'modal';
   modalSuccess.className = 'modal modal_active';
   })
}  
  for (let i = 0; i < btnX.length; i++) {
    btnX[i].addEventListener('click', () => {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
   })
 }

