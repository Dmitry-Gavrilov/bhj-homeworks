const interestList = Array.from(document.querySelectorAll('.interest__check'));

for (let i = 0; i < interestList.length; i++) {
      const mainCheckbox = interestList[i].closest(`.interest`);
      const secondaryCheckbox = mainCheckbox.querySelectorAll('.interest__check');

      interestList[i].addEventListener('click', () => {
        if (interestList[i].checked === true) {        
            for (let item of secondaryCheckbox) {
                item.checked = true;
              //item.setAttribute('checked', true)
            }
        } else if (interestList[i].checked === false) {
            for (let item of secondaryCheckbox) {
                item.checked = false;
              //item.setAttribute('checked', false)
            }
        }
    })
}

