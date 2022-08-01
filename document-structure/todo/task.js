
'use strict'

const inputTask  = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");
const addTask = document.querySelector(".tasks__add");

addTask.addEventListener("click", (event) => {
	event.preventDefault();
	if (inputTask.value) {
		taskList.insertAdjacentHTML("beforeEnd", `<div class="task">
      <div class="task__title">
       ${inputTask.value}
      </div >
         <a href="#" class="task__remove">&times;</a>
      </div >`)

	const remove = document.querySelectorAll(".task__remove");
		let i = remove.length - 1;
		remove[i].addEventListener("click", () => {
			remove[i].closest(".task").remove();
		})

	inputTask.value = null;
		
	}
})

	