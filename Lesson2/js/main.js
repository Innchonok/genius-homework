// ---------------- Lesson 2 -------------

//***1***
// Якщо змінна більше нуля - виведіть true, менше - false
console.log("Якщо змінна більше нуля - виведіть true, менше - false");

function lessMoreZero(intValue) {
  console.log("Число: ", intValue);
  // Варіант 1:
  if (intValue > 0) {
    console.log(true);
  } else if (intValue < 0) {
    console.log(false);
  } else {
    console.log(0);
  }
  // Варіант 2:
  console.log(intValue > 0 ? true : intValue < 0 ? false : 0);
  // Варіант 3:
  console.log(intValue > 0 || intValue < 0 ? intValue > 0 : 0);
}

//Перевірте це на варіантах  1, 0, -3
console.log("Перевірте це на варіантах  1, 0, -3");
lessMoreZero(1);
lessMoreZero(0);
lessMoreZero(-3);

//***2***
// Якщо змінна ="test" - виведіть true
console.log('Якщо змінна ="test" - виведіть true');
function isTest(strValue) {
  console.log("Строка: ", strValue);
  console.log(strValue === "test" ? true : "");
}

//Перевірте це на варіантах  'test', "qwerty", true
console.log(`Перевірте це на варіантах  'test', "qwerty", true`);
isTest("test");
isTest("qwerty");
isTest(true);

//***3***
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
console.log(
  "Якщо змінна більше 10 -  відніміть 5, менше - додайте 5, результат виведіть в консоль"
);
function addTenFive(intValue) {
  console.log("Число: ", intValue);
  if (intValue > 10) {
    console.log(intValue - 5);
  } else if (intValue < 10) {
    console.log(intValue + 5);
  }
}

//Перевірте це на варіантах  1, 10, 13.
console.log('Якщо змінна ="test" - виведіть true');
addTenFive(1);
addTenFive(10);
addTenFive(13);

//***4***
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
console.log(
  "Зробіть сервіс який отримує число від 1 до 12. виведіть місяць який дорівнює числу"
);

function getRandomMonth(intNum) {
  const objMonth = {
    1: "січень",
    2: "лютий",
    3: "березень",
    4: "квітень",
    5: "травень",
    6: "червень",
    7: "липень",
    8: "серпень",
    9: "вересень",
    10: "жовтень",
    11: "листопад",
    12: "грудень",
  };

  console.log(`${intNum}: ${objMonth[intNum]}`);
  return objMonth[intNum];
}

getRandomMonth(4);
getRandomMonth(6);
getRandomMonth(10);
getRandomMonth(11);

//***5***
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
console.log(
  "Зробіть сервіс який отримує тризначне число. Поверніть користувачу сумму цих чисел"
);

function sumThreeNum(intNum) {
  if (typeof intNum != "number" || intNum < 100 || intNum > 999) {
    console.log(`Вхідний параметр ${intNum} не є тризначним числом`);
  } else {
    let intRes =
      parseInt(intNum / 100) +
      parseInt((intNum - parseInt(intNum / 100) * 100) / 10) +
      (intNum -
        parseInt(intNum / 100) * 100 -
        parseInt((intNum - parseInt(intNum / 100) * 100) / 10) * 10);
    console.log(`Сума цифр числа ${intNum} дорівнює: ${intRes}`);
    return intRes;
  }
}

sumThreeNum(100);
sumThreeNum(345);
sumThreeNum(123);
sumThreeNum(222);
sumThreeNum(333);
sumThreeNum(200);
sumThreeNum(12);
sumThreeNum(1234);
sumThreeNum("12fff");
