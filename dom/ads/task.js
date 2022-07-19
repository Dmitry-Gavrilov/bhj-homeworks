
  
const itsMe = Array.from(document.querySelectorAll(".rotator__case"));
const rotatorMain = document.querySelector(".rotator");

function changeWords() {
  for (let item of itsMe) {
    if (item.nextElementSibling === null) {
    rotatorMain.firstElementChild.classList.add("rotator__case_active");
    item.classList.remove("rotator__case_active");
    
    } else if (item.classList.contains("rotator__case_active")) {
    item.nextElementSibling.classList.add("rotator__case_active");
    item.classList.remove("rotator__case_active");
    break;    
      }
    }
  }

setInterval(changeWords, 1000);
 