'use strict';

let form = document.getElementById("signin__form");
let welcome = document.getElementById("welcome");
let userId = document.getElementById("user_id");
let signin = document.getElementById("signin");

window.addEventListener('load', () => {
	
	if (localStorage.user_id === undefined) {
	    signin.className = "signin signin_active";
	} else {
	    welcome.className = "welcome welcome_active";
    	userId.textContent = localStorage.user_id;
	};
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
  let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(formData);
  
	
	xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status == 200) {
	     		let answerJSON = xhr.responseText;
		    	let answerObject = JSON.parse(answerJSON);
		
		    	if (answerObject.success) {
			    welcome.classList.add("welcome_active");
			    localStorage.user_id = answerObject.user_id;
			    userId.textContent = localStorage.user_id;
			    signin.className = "signin";
				} else 

			    if (!answerObject.success) {
			        alert("Неверные логин/пароль.");
		        };
	    };
        form.reset()
    });
});
