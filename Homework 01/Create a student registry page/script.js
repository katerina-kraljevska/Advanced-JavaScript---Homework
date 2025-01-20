// Create an HTML page with student registry form with
// First Name
// Last Name
// Age
// Email
// Create a student generator function
// When the form is submitted, the inputs should be compiled into a new object from the generator function Student
// This student should be added to a list called "database"
// After submit the database should be printed in the console
// The input fields should be cleared

//Global variables
let database = [];
let list = document.getElementById("list");
let firstName1 = document.getElementById("firstName");
let lastName1 = document.getElementById("lastName");
let age1 = document.getElementById("age");
let email1 = document.getElementById("email");
let SubmitButton = document.getElementById("btn1");

//Functions
function Student(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

function newStudent() {
  let student1 = new Student(
    firstName1.value,
    lastName1.value,
    age1.value,
    email1.value
  );
  database.push(student1); //za da odi vo bazata na podatoci
  console.log(student1);
  console.log(database);

  //clean fields
  firstName1.value = "";
  lastName1.value = "";
  age1.value = "";
  email1.value = "";
}

//Events
SubmitButton.addEventListener("click", function () {
  newStudent();
});
