const board = document.querySelector("#board");
const palette = document.querySelector(".palette");
const eraser = document.querySelector(".eraser");
const colors = ["red", "blue", "green", "yellow", "orange", "brown"];
const SQUARES_NUMBER = 500;
let isColor = false;
let selectedColor = "#1d1d1d";

eraser.addEventListener("click", () => eraserColor());

for (let color of colors) {
  const paletteColor = document.createElement("div");
  paletteColor.classList.add("color");
  paletteColor.style.backgroundColor = color;
  paletteColor.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  paletteColor.addEventListener("click", () => saveColor(color));
  palette.append(paletteColor);
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  // square.addEventListener("mouseover", () => setColor(square));
  // square.addEventListener("mouseleave", () => removeColor(square));
  square.addEventListener("mouseover", setColor); // по умолчанию передается как параметр event
  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}

function saveColor(nameColor) {
  isColor = true;
  selectedColor = nameColor;
}

function eraserColor() {
  isColor = false;
}
//event.target -> element  - Destructuring
//event.target — элемент, на который кликнули.
//event.type — тип события (например, "click").
//event.clientX и event.clientY — координаты клика относительно окна браузера.
//Для событий клавиатуры объект события содержит:
//event.key — символ нажатой клавиши (например, "a").
//event.code — физический код клавиши (например, "KeyA").

// function setColor(element) {
function setColor({ target: element }) {
  const color = isColor ? selectedColor : randomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor({ target: element }) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function randomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
