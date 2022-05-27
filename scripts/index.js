const popup = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");
const editButton = document.querySelector(".header__notifications");
const closeButton = document.querySelector(".popup__close");
const notifs = document.querySelector(".post__exp-sect");
function popUpVisibility() {
  if (!popup.classList.contains("popup_is-opened")) {
    notifs.value;
  }
  popup.classList.toggle("popup_is-opened");
}
editButton.addEventListener("click", popUpVisibility);
closeButton.addEventListener("click", popUpVisibility);
