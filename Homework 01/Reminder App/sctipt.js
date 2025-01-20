// Create a reminder app
// There should be:
// An input for entering the title
// An input for entering priority
// An input for color
// A textarea for adding a description
// A button for adding the reminder
// A button for showing all reminders

// When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property

//Global variables
let database = [];
let title1 = document.getElementById("title");
let priority1 = document.getElementById("priority");
let color1 = document.getElementById("color");
let description1 = document.getElementById("description");
let reminderBtn = document.getElementById("reminderBtn");
let allRemindersBtn = document.getElementById("allRemindersBtn");
let tableBody = document.getElementById("tableBody");
let table = document.getElementById("table");

//Functions
function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

function newReminder() {
  let reminder1 = new Reminder(
    title1.value,
    priority1.value,
    color1.value,
    description1.value
  );
  database.push(reminder1); //za da odi vo bazata na podatoci
  console.log(reminder1);
  console.log(database);

  //reset
  title1.value = "";
  priority1.value = "";
  color1.value = "";
  description1.value = "";
}

function showTableHeader() {
  table.style.display = "block";
}

function createTable() {
  tableBody.innerHTML = "";
  database.forEach((reminder) => {
    let row = `<tr>
        <td style="color:${reminder.color}">${reminder.title}</td>
        <td>${reminder.priority}</td>
        <td>${reminder.description}</td>
      </tr>`;
    tableBody.innerHTML += row;
  });
}

//Events

reminderBtn.addEventListener("click", function () {
  newReminder();
});

allRemindersBtn.addEventListener("click", function () {
  showTableHeader();
  createTable();
});
