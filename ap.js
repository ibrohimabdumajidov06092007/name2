let left = document.querySelector(".l");
let right = document.querySelector(".r");
let slide = document.querySelector(".slide");
let n = 0;

left.addEventListener("click", () => {
  n++;
  if (n > 2) {
    n = 2;
  }
  slide.style.transform = `translate(${n * 200}px, 0)`;
});
right.addEventListener("click", () => {
  n--;
  if (n > -2) {
    n = -1;
  }
  slide.style.transform = `translate(${n * 200}px, 0)`;
});
