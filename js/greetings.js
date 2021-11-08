const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const HIDEEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();         //브라우저의 기본정보를 막아줌
    loginForm.classList.add(HIDEEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `환영합니다 ${username}님`
    greeting.classList.remove(HIDEEN_CLASSNAME);
}
const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDEEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(savedUsername);
}