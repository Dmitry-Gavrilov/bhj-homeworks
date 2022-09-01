const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.addEventListener('readystatechange', (event) => {
  if(xhr.readyState === xhr.DONE) {
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader_active');
    const items = document.getElementById('items');  
    
    let data = JSON.parse(xhr.response).response.Valute;

    
    for (let element in data) {
      items.insertAdjacentHTML('beforeend', `
        <div class="item">
        <div class="item__code">
                ${data[element].CharCode}
            </div>
            <div class="item__value">
                ${data[element].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `);
    }
  }
})
xhr.send();

