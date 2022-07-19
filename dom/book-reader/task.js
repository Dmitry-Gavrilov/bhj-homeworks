let activeFont = document.querySelector('.font-size_active');
let book = document.getElementById('book');
let small = document.querySelector('.font-size_small');
let big = document.querySelector('.font-size_big');

function smallCheck(event) {
  event.preventDefault();
  activeFont.classList.remove('font-size_active');
  small.classList.add('font-size_active') ;
  big.classList.remove('font-size_active'); 
  book.classList.add("book_fs-small");        
}    
  
small.addEventListener("click", smallCheck)
    
function bigCheck(event) {
  event.preventDefault();
  activeFont.classList.remove('font-size_active')
  big.classList.add('font-size_active') 
  small.classList.remove('font-size_active');
  book.classList.remove('book_fs-small');
  book.classList.add("book_fs-big");    
}  

big.addEventListener("click", bigCheck)

