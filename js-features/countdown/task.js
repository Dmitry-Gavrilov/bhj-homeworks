const valueOfTimer = document.getElementById("timer");

function countdownTimer() {
    let countdown = valueOfTimer.textContent;
    countdown -= 1;
    valueOfTimer.textContent = countdown; 
    if (countdown < 0) {
      alert('Вы победили в конкурсе!');
      valueOfTimer.textContent = 59;
    } 
   }
      setInterval(countdownTimer, 1000);


   
   
  
