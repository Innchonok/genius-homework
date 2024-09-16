//---1--Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }
console.log("-- Завдання 1 ----------");

function checkAge(age) {
  return age > 18 ? true : confirm("Батьки дозволили?");
}

checkAge(56);
// checkAge(17);

//--- 2--Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
console.log("-- Завдання 2 ----------");
//Варіант 1
const min1 = (a, b) => (a > b ? b : a);
//Варіант 2
function min2(a, b) {
  return a > b ? b : a;
}

console.log(min1(2, 55));
console.log(min2(22, 13));

//-- - 3--Перепишіть з використанням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

console.log("-- Завдання 3 ----------");

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);

console.log("-- The End ----------");
