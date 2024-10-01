const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeGame = document.querySelector("#time");
const board = document.querySelector("#board");
const winBtn = document.querySelector("#win-btn");
const colors = ["red", "blue", "green", "yellow", "orange", "brown"];

// let time = 5;
let score = 0;

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    console.log(event.target);
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

startBtn.addEventListener("click", () => {
  event.preventDefault();
  screens[0].classList.add("up");
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function randomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function startGame() {
  setTime(time);
  createRandomCircle();
  setInterval(decreaseTime, 1000);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    time--;
    setTime(time);
  }
}

function setTime(value) {
  timeGame.innerHTML = value < 10 ? `00:0${value}` : `00:${value}`;
}

function finishGame(value) {
  timeGame.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  //   console.log(`size: ${size}  width: ${width} , height: ${height}`);
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  //   console.log(`x: ${x} , y: ${y}`);
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.backgroundColor = randomColor();

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let switcher = false;
let interval;
winBtn.addEventListener("click", winGame);

function winGame() {
  function userClick() {
    const circle = document.querySelector(".circle");

    if (circle) {
      circle.click();
    }
  }

  switcher = !switcher;

  console.log(switcher);
  if (switcher) {
    interval = setInterval(userClick, 42);
    console.log(interval);
  } else {
    clearInterval(interval);
    console.log(interval);
  }
}

//DEBUG
// startGame();
