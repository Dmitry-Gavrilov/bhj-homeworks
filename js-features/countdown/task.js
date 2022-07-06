const valueOfTimer = document.getElementById("timer");

function countdownTimer() {
    let countdown = +valueOfTimer.textContent;
    countdown -= 1;
    valueOfTimer.textContent = countdown; 
    if (countdown < 0) {
      alert('Вы победили в конкурсе!');
      clearInterval(timerId);
      valueOfTimer.textContent = 0;
    } 
  
   }
   let timerId = setInterval(countdownTimer, 1000);
