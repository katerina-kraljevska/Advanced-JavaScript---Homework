// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2
// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

// function studentsWithGrade3OrHigher() {
//   let filteredStudents = [];
//   for (let student of students) {
//     if (student.averageGrade >= 3) {
//       filteredStudents.push({
//         fullName: `${students.firstName} ${students.lastName}`,
//         age: students.age,
//       });
//     }
//   }
//   return filteredStudents;
// }

// function femaleStudentsWithGradeOf5() {
//   let filteredFemaleStudents = [];
//   for (let student of students) {
//     if (student.gender === "female" && student.averageGrade === 5) {
//       filteredStudents.push({
//         fullName: `${students.firstName} ${students.lastName}`,
//       });
//     }
//   }
//   return filteredFemaleStudents;
// }

// function maleStudentsOverTheAgeOf18() {
//   let filteredMaleStudents = [];
//   for (let student of students) {
//     if (student.gender === "male") {
//       if (student.age >= 18 && student.city === "Skopje") {
//         filteredMaleStudents.push({
//           fullName: `${students.firstName} ${students.lastName}`,
//         });
//       }
//     }
//   }
//   return filteredMaleStudents;
// }

// function averageGradesOfFemaleStudentsOver24() {
//   let averageGrades = [];
//   for (let student of students) {
//     if (student.gender === "female" && student.age >= 24) {
//       averageGrades.push(`${student.averageGrade}`);
//     }
//   }
//   return averageGrades;
// }

// function allMaleStudentsWithNameStartingWithBAndGradeOver2() {
//   let maleStudentsWithNameStartingWithB = [];
//   for (let student of students) {
//     if (student.gender === "male") {
//       if ((student.firstName.firstLetter = "B" && student.averageGrade >= 2)) {
//         maleStudentsWithNameStartingWithB.push(student);
//       }
//     }
//   }
//   return maleStudentsWithNameStartingWithB;
// }

let students1;

fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    students1 = data;
    console.log("Students:", students1);
    console.log(
      "Students with grade higher than 3:",
      studentsWithGrade3OrHigher(students1)
    );
    console.log(
      "Female students with grade 5:",
      femaleStudentsWithGradeOf5(students1)
    );
    console.log(
      "Male students over 18 in Skopje:",
      maleStudentsOver18InSkopje(students1)
    );
    console.log(
      "Average grades of female students over 24:",
      averageGradesOfFemaleStudentsOver24(students1)
    );
    console.log(
      "Male students with name starting with 'B' and grade > 2:",
      allMaleStudentsWithNameStartingWithBAndGradeOver2(students1)
    );

    studentsWithGrade3OrHigher(students1);
  })
  .catch(function (error) {
    console.log("The request has failed:", error);
  });

function studentsWithGrade3OrHigher(students) {
  let studentsWithGrade3OrHigher = students
    .filter((student) => student.averageGrade >= 3)
    .map((student) => ({
      fullName: `${student.firstName} ${student.lastName}`,
      age: student.age,
    }));
  return studentsWithGrade3OrHigher;
}

function femaleStudentsWithGradeOf5(students) {
  return students
    .filter(
      (student) => student.gender === "Female" && student.averageGrade === 5
    )
    .map((student) => student.firstName);
}

function maleStudentsOver18InSkopje(students) {
  return students
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.age > 18 &&
        student.city === "Skopje"
    )
    .map((student) => `${student.firstName} ${student.lastName}`);
}

function averageGradesOfFemaleStudentsOver24(students) {
  let filteredStudents = students.filter(
    (student) => student.gender === "Female" && student.age > 24
  );

  if (filteredStudents.length === 0) return 0;

  let totalGrade = filteredStudents.reduce(
    (sum, student) => sum + student.averageGrade,
    0
  );

  let average = totalGrade / filteredStudents.length;

  return average;
}

function allMaleStudentsWithNameStartingWithBAndGradeOver2(students) {
  return students
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.firstName.startsWith("B") &&
        student.averageGrade > 2
    )
    .map((student) => student.firstName);
}
