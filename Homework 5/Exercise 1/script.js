// Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be: Academy

// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// Subject

// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student

// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

function Academy(name, start, end) {
  this.name = name;
  this.students = [];
  this.subjects = [];
  this.start = start;
  this.end = end;

  (this.numberOfClasses = function () {
    return this.subjects.length * 10;
  }),
    (this.printStudents = function () {
      this.students.forEach((student) => console.log(student));
    });

  this.printSubjects = function () {
    this.subjects.forEach((subject) => console.log(subject));
  };
}

function Subject(title, isElective, academy) {
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective = isElective;
  this.academy = academy;
  this.students = [];
  this.overrideClasses = function (number) {
    if (number >= 3) {
      this.numberOfClasses = number;
    } else {
      console.log("Number of classes cannot be smaller than 3.");
    }
  };
}

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;

  this.startAcademy = function (academy) {
    if (academy) {
      this.academy = academy;
    } else {
      console.log("Invalid Academy.");
    }
  };

  this.startSubject = function (subject) {
    if (this.academy.subjects.includes(subject)) {
      this.currentSubject = subject;
      subject.students.push(this);
    } else {
      console.log("Subject doesn't exist in the academy");
    }
  };
}
