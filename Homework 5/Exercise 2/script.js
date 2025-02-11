// Make the functions StartAcademy and StartSubject dynamic.

// StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

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
      academy.students.push(this); //go dodava studentot vo nizata
    } else {
      console.log("Invalid Academy.");
    }
  };

  this.startSubject = function (subject) {
    if (this.academy.subjects.includes(subject)) {
      if (this.currentSubject) {
        this.completedSubjects = subject; //ako postoi currentSubject da se prefrli vo completedSubject
      }
      this.currentSubject = subject; //ako ne go dodava subject na currentSubject
      if (!subject.students.includes(this)) {
        subject.students.push(this); //push na students vo listata na studenti sto go slusaat predmetot
      }
    } else {
      console.log("Subject doesn't exist in the academy");
    }
  };
}
