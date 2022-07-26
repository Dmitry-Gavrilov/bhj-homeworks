const chatWidget = document.querySelector('.chat-widget');
const sideText = document.querySelector('.chat-widget__side');
const chatInput = document.getElementById('chat-widget__input');
const chatWidgetMesseges = document.getElementById('chat-widget__messages')
const messagesBot = ['Привет! Как дела?', 'Подождите минуточку', 'Не стоит торопиться', 'Мы вскоре вам ответим', "К сожалению оператор отошел попить чаю"];

  sideText.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active')
  })

  let time = new Date().toLocaleTimeString()

  function sendUserMessages(event) {
            chatWidgetMesseges.innerHTML += `
              <div class="message message_client">
              <div class="message__time">${time}</div>
              <div class="message__text">
                ${event.target.value}
              </div>
              </div>
            `;  
          event.target.value = '';
  }
  
   function sendBotMessages() {
     let randomMessage = Math.floor(Math.random() * messagesBot.length);
      chatWidgetMesseges.innerHTML += `
      <div class="message">
      <div class="message__time">${time}</div>
      <div class="message__text">
      ${messagesBot[randomMessage]}
      </div>
      </div>
     `; 
 }
  
  chatInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        sendUserMessages(event);
        setTimeout(sendBotMessages, 800)  ;
    }
  }  
);
