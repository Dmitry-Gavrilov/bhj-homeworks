const title = document.getElementById('poll__title');
const answersList = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.responseType = 'json';

xhr.addEventListener('load', () => {

        const data = xhr.response.data;
        title.innerText = data.title;

        for (const answer of data.answers) {

            const btn = `<button class="poll__answer">${answer}</button>`;

            answersList.insertAdjacentHTML('beforeend', btn);
        }

        const answerBtns = document.querySelectorAll('.poll__answer');
        
        for (const Btn of answerBtns) {
            Btn.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')});
        }
    
});

