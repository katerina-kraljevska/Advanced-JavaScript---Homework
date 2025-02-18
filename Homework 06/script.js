// Exercise 1
// Create a Person constructor function that has:

// firstName
// lastName
// age
// getFullName - method

// Create a Student constructor function that inherits from Person and has:

// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

function Student(firstName, lastName, age, studentId, academyName) {
  Object.setPrototypeOf(this, new Person(firstName, lastName, age));
  this.academyName = academyName;
  this.studentId = studentId;
  this.study = function () {
    console.log(
      `The student ${this.firstName} is studying in the ${this.academyName}`
    );
  };
}

let student1 = new Student(
  "Katerina",
  "Kraljevska",
  22,
  "WebDevelopment",
  "18080"
);

let student2 = new Student("Lina", "Bozinovska", 22, 13452, "QA");

console.log(student1);
console.log(student2);

// Exercise 2
// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy

Person.prototype.studentOfAcademy = function (student) {
  console.log(`Academy name: ${student.academyName}`);
};

function DesignStudent(
  firstName,
  lastName,
  age,
  studentId,
  isStudentOfTheMonth
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, studentId, "Design Academy")
  );
  this.isStudentOfTheMonth = isStudentOfTheMonth;
  this.attendAdobeExam = function () {
    console.log(`The student ${this.firstName} is doing an adobe exam!`);
  };
}

function CodeStudent(firstName, lastName, age, studentId) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, studentId, "Code Academy")
  );
  this.hasIndividualProject = false;
  this.hasGroupProject = false;
  this.doProject = function (type) {
    if (type.toLowerCase() === "group") {
      return (this.hasGroupProject = true);
    } else if (type.toLowerCase() === "individual") {
      return (this.hasIndividualProject = true);
    } else {
      return "Error";
    }
  };
}

function NetworkStudent(firstName, lastName, age, studentId, academyPart) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, studentId, "Networking Academy")
  );
  this.academyPart = academyPart;
  this.attendCiscoExam = function () {
    console.log(`The student ${this.firstName} is doing a cisco exam!`);
  };
}

let student3 = new DesignStudent("Katerina", "Kraljevska", 22, 18080, false);
console.log(student3);
let student4 = new CodeStudent("Katerina", "Kraljevska", 22, 18080);
console.log(student4.doProject("group"));
