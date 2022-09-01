const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.addEventListener('progress',  (event) => {

        progress.value = event.loaded / event.total;
    });

    xhr.upload.addEventListener('load', () => {
        alert("Данные полностью загружены на сервер!");
    });
    
    xhr.send(formData);
});

