const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});


const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const images = document.querySelectorAll(".photos img");

let imageIndex = 0;

nextButton.onclick = function () {
  images[imageIndex].classList.remove("show");

  imageIndex = imageIndex ++;

  images[imageIndex].classList.add("show");
};

prevButton.onclick = function () {
  images[imageIndex].classList.remove("show");

  imageIndex = imageIndex --;

  images[imageIndex].classList.add("show");
};
