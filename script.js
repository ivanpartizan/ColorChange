const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "##00ffff",
  "#00ffbf",
  "#80ff00",
  "#ffbf00",
  "#8000ff"
];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  // bodyBcg.style.backgroundColor = colors[0];
  bodyBcg.style.backgroundColor = colors[random];
}
