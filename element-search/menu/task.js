
let menuLink = Array.from(document.querySelectorAll('.menu__link'));
let menuItem = Array.from(document.getElementsByClassName('menu__item'));
let menuSub = Array.from(document.getElementsByClassName('menu menu_sub'));

for (let i = 0; i < menuLink.length; i++) { 
    menuLink[i].onclick = () => {
     if (menuItem [i].querySelector('.menu_sub')) { 
      menuItem[i].querySelector('.menu_sub').classList.toggle('menu_active');
     return false;
      }       
   }
}
