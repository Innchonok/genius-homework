// -- 1 --------------------------------
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

const arrFruts = fruts.map((item) => item.name);
console.log("-- Завдання 1 ----------");
console.log(arrFruts);

// -- 2 ------------------------------
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// Варіант 1
console.log("-- Завдання 2 ---Варіант 1-------");
for (let i = 1; i < 6; i++) {
  console.log(i * 2);
}
// Варіант 2
console.log("-- Завдання 2 ---Варіант 2-------");
for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

// -- 3 ---------------------------------
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
console.log("-- Завдання 3 ----------");
let i = 0;
while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
}

// -- 4 -----------------------
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
console.log("-- Завдання 4 ----------");
let noCorrect = true;
let num = "";
do {
  num = prompt("Input a number more than 100:", "");
  if (num !== "" && num !== null) {
    if (Number(num) > 100) {
      noCorrect = false;
    }
  } else {
    noCorrect = false;
  }
  console.log(`User inputed: ${num}`);
  // noCorrect = num ? num * 1 < 100 && num !== "" : false;
} while (noCorrect);

// -- 5 -----------------------------------
// Вирахуйте середній вік
console.log("-- Завдання 5 ----------");
const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

const ages = girls.map((girl) => girl.age);
//console.log(ages);

let middleAge = ages.reduce((sum, item) => sum + item) / ages.length;
console.log(`Середній вік: ${middleAge}`);

console.log("-- The Endnghngh ----------");
