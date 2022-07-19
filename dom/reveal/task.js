const reveal = document.querySelectorAll('.reveal');

 function check() {
    for ( let i = 0; i < reveal.length; i++) { 
        if (window.innerHeight > reveal[i].getBoundingClientRect().top &&
            reveal[i].getBoundingClientRect().bottom > 0) {
            reveal[i].classList.add("reveal_active")
        } else {
        reveal[i].classList.remove("reveal_active")
        }   
    }
}   
      window.addEventListener('scroll', check);
