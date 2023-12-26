

const btn = document.querySelectorAll(".btn");
const imgContainer = document.querySelector(".container");
const pictures = ["1", "2", "3", "4", "5"];
let counter = 0;
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("btn-left")) {
      counter--;
      if (counter < 0) {
        counter = pictures.length - 1;
      }
      imgContainer.style.background = `url('${pictures[counter]}.jpg')`;
    }
    if (button.classList.contains("btn-right")) {
      counter++;
      if (counter > pictures.length - 1) {
        counter = 0;
      }
      imgContainer.style.background = `url('${pictures[counter]}.jpg')`;
    }
  });
});
