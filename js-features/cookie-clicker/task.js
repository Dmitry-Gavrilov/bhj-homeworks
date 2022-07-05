  const clicker = document.getElementById("clicker__counter"); 
  let cookie = document.getElementById("cookie");

  function clickCount() {
    let click = clicker.textContent;
    click ++;
    clicker.textContent = click;
    cookie.width = 300;

    function startSize() {
    cookie.width = 200;
  }
setTimeout(startSize, 40); 
};
cookie.onclick = clickCount;



