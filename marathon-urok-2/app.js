// dragstart: Начало перетаскивания элемента (изменение стилей, инициализация данных).
// dragend: Завершение перетаскивания (очистка стилей, сброс данных).
// dragover: Элемент перетаскивается над областью сброса (используется для разрешения сброса).
// dragenter: Элемент входит в область сброса (изменение стилей области).
// dragleave: Элемент покидает область сброса (восстановление стилей области).
// drop: Элемент сбрасывается в область (выполнение основной логики).

const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  // Используем setTimeout для добавления класса 'hide' после завершения текущего контекста выполнения
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.classList.remove("hold", "hide");
  //   event.target.className = "item";
}

function dragover(event) {
  event.preventDefault(); // Нужно для разрешения сброса элемента
}
function dragenter(event) {
  event.preventDefault(); // Также предотвращает стандартное поведение браузера
  event.target.classList.add("hovered");
  event.target.classList.remove("transparent");
}
function dragleave(event) {
  event.target.classList.remove("hovered");
  event.target.classList.add("transparent");
}
function dragdrop(event) {
  event.preventDefault(); // Обязательно для отмены стандартного поведения браузера
  event.target.append(item);
}
