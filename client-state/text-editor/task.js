let textForm = document.getElementById('editor');
textForm.value = localStorage.getItem('text');

textForm.addEventListener("keyup", () => {
  localStorage.setItem('text', textForm.value);
})

clear.addEventListener('click', () => {
  localStorage.removeItem('text');
  textForm.value = '';
});


