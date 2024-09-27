//---1- написати об'єкт студента який буде виводити
//ім'я, спеціальнісь, середній бал і кількість пропущених занять
//2) написати метод який буде виводити цю інфоацію
//3) написати три варіанти студентів
//4) прикріпити значення за допомогою  call apply bind

const student = {
  displayInfo: function (score, missed) {
    console.log(
      `ім'я: ${this.name}, спеціальнісь: ${this.spec}, середній бал: ${score}, кількість пропущених занять: ${missed}`
    );
  },
};

const student1 = {
  name: "Oleg",
  spec: "Manager",
};

const student2 = {
  name: "Maksym",
  spec: "Designer",
};

const student3 = {
  name: "Pavel",
  spec: "Lawyer",
};

console.group("------bind------");
student.displayInfo.bind(student1, "3", "5")();
student.displayInfo.bind(student2, "5", "0")();
student.displayInfo.bind(student3, "2", "15")();
console.groupEnd();

console.group("------call------");
student.displayInfo.call(student1, "3", "5");
student.displayInfo.call(student2, "5", "0");
student.displayInfo.call(student3, "2", "15");
console.groupEnd();

console.group("------apply------");
student.displayInfo.apply(student1, ["3", "5"]);
student.displayInfo.apply(student2, ["5", "0"]);
student.displayInfo.apply(student3, ["2", "15"]);
console.groupEnd();

//--2--Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

function htmlDesc() {
  alert(
    "HTML (HyperText Markup Language) — це стандартна мова розмітки для створення веб-сторінок,\nяка використовується для структурування і форматування контенту."
  );
}

function cssDesc() {
  alert(
    "CSS (Cascading Style Sheets) — це мова стилів, яка використовується для опису зовнішнього вигляду HTML-елементів на веб-сторінках, таких як кольори, шрифти, відступи, розташування та анімації.\nCSS дозволяє відокремити візуальне оформлення від структури документа,що спрощує підтримку і зміну стилів."
  );
}

document.querySelector("#html").addEventListener("click", htmlDesc);
document.querySelector("#css").addEventListener("click", cssDesc);

//--3--Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry  58, 1,3
//3) jrange 89, 3,4

function shop(name, price, amount) {
  return {
    getCost() {
      return `Name: ${name}. Cost: ${(price * amount).toFixed(2)} UAH`;
    },
  };
}

console.log(shop(...["banana", 30, 4.5]).getCost());
console.log(shop.apply(null, ["cherry", 58, 1.3]).getCost());
console.log(shop("jrange", 89, 3.4).getCost());

// function shop(name, price, amount) {
//   return `Name: ${name}. Cost: ${(price * amount).toFixed(2)} UAH`;
// }

// console.log(shop(...["banana", 30, 4.5]));
// console.log(shop.apply(null, ["cherry", 58, 1.3]));
// console.log(shop("jrange", 89, 3.4));
