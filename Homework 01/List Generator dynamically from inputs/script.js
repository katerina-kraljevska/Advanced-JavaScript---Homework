// List generator from an array
// Create an array of 5 names
// Create an HTML page with:
// A header
// An empty unordered list
// A button
// When the button is clicked it should fill in the empty unordered list with the names of the array

//Global variables
let array = [];
let names = document.getElementById("names");
let list = document.getElementById("list");

// FUNCTIONS
function addElements() {
  list.innerHTML = "";
  let name = names.value;
  if (name && array.length < 5) {
    array.push(name);
    console.log(name);
    names.value = "";
  } else {
    alert("The maximum number of names is 5. Click on generate names.");
  }
}

function addList() {
  for (let i = 0; i < 5; i++) {
    list.innerHTML += `<li>${array[i]}</li>`;
  }
  return array;
}

//EVENTS
document.getElementById("btn2").addEventListener("click", function () {
  addElements();
});
document.getElementById("btn").addEventListener("click", function () {
  addList();
});
