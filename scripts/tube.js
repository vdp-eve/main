const tube = document.querySelector(".tube");
const tubeForm = document.querySelector(".tube__form");
const tubeButton = document.querySelector(".header__tube");
const tubeclose = document.querySelector(".tube__close");
const tubes = document.querySelector(".post__exp-sect");
function tubeVisibility() {
  if (!tube.classList.contains("tube_is-opened")) {
    tubes.value;
  }
  tube.classList.toggle("tube_is-opened");
}
tubeButton.addEventListener("click", tubeVisibility);
tubeclose.addEventListener("click", tubeVisibility);
