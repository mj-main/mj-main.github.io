const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const inputName = document.querySelector("#input-name");
const inputButton = document.querySelector("#input-button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  inputName.classList.add(HIDDEN_CLASSNAME);
  inputButton.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const hour1 = new Date().getHours();
  if (hour1 >= 6 && hour1 < 11) {
    greetText = "Good morining, ";
  } else if (hour1 >= 11 && hour1 < 15) {
    greetText = "Good afternoon, ";
  } else if (hour1 >= 15 && hour1 < 19) {
    greetText = "Hello, ";
  } else if (hour1 >= 19 && hour1 < 23) {
    greetText = "Good evening, ";
  } else {
    greetText = "Good night, ";
  }

  greeting.innerText = `${greetText}${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  inputName.classList.add(HIDDEN_CLASSNAME);
  inputButton.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
