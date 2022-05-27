const message = document.querySelector(".message");
const messageForm = document.querySelector(".message__form");
const messageButton = document.querySelector(".header__message");
const close = document.querySelector(".message__close");
const messages = document.querySelector(".post__exp-sect");
function messageVisibility() {
  if (!message.classList.contains("message_is-opened")) {
    messages.value;
  }
  message.classList.toggle("message_is-opened");
}
messageButton.addEventListener("click", messageVisibility);
close.addEventListener("click", messageVisibility);
