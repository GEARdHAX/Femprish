window.onload = function () {
 window.scrollTo(0, 0);
};
const slider = document.getElementById("nav");
const close = document.getElementsByClassName("fa-solid")[1];
const box = document.getElementsByClassName("box")[0];

slider.addEventListener("click", function () {
 box.style.display = "flex";
 box.classList.add("active");
 box.classList.remove("remove");
 document.body.style.overflowY = "hidden";
});

close.addEventListener("click", function () {
 document.body.style.overflowY = "auto";
 box.classList.add("remove");
 box.classList.remove("active");

 setTimeout(function () {
  box.style.display = "none";
 }, 390); // Delay the display property change to allow time for the fade-out animation
});
