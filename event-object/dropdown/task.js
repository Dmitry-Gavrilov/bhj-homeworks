
const list  = document.querySelector('.dropdown__list');
const item = document.getElementsByClassName('dropdown__item');
const link = document.getElementsByClassName("dropdown__link");
const dropdown = document.querySelector(".dropdown")
const value = document.querySelector(".dropdown__value");


dropdown.onclick = function() {
      list.classList.toggle("dropdown__list_active");
    };

 for (let i = 0; i < item.length; i++) {
  item[i].onclick = () => {
    value.textContent = link[i].textContent;
   return false;
  }
}


