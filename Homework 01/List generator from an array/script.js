// Create 3 inputs:
// Color
// FontSize
// Items
// Create a button for generating unordered lists
// When the button is clicked generate a new ul element with the color, font size, and items from the inputs

//GLOBAL VARIABLES

let color = document.getElementById("color");
let fontSize = document.getElementById("fontSize");
let items = document.getElementById("items");
let list = document.getElementById("list");
let array = [];

//FUNCTIONS

function addElements() {
  let item = items.value;
  if (item) {
    array.push(item);
    console.log(item);
    items.value = "";
  }
}

function addList() {
  list.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    list.innerHTML += `<li>`;
    list.innerHTML += `${array[i]}`;
    if (i < array.length - 1) {
      list.innerHTML += `,`; //za da se dodadt zapirkite sekade osven na psoledniot element
    }
    list.innerHTML += `</li>`;
  }
  return array;
}

function style() {
  list.style.color = color.value;
  list.style.fontSize = `${fontSize.value}px`;
}

document.getElementById("btn1").addEventListener("click", function () {
  addElements();
});

document.getElementById("btn2").addEventListener("click", function () {
  style();
  addList();
});
