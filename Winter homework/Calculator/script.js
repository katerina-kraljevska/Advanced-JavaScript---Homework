//GLOBAL VARIABLES
let inputs = [];
let input = "";
let operators = [];
let operator = "";
let isDecimalUsed = false;

//EVENT LISTENERS
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let resetBTN = document.getElementById("C");
let sum = document.getElementById("sum");
let substraction = document.getElementById("substraction");
let multiply = document.getElementById("multiplication");
let divide = document.getElementById("division");
let arrow = document.getElementById("arrow");
let decimal = document.getElementById("decimal");
let equal = document.getElementById("equal");
let result = document.getElementById("result");

//FOR EACH BUTTON

one.addEventListener("click", function () {
  value = 1;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

two.addEventListener("click", function () {
  value = 2;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

three.addEventListener("click", function () {
  value = 3;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

four.addEventListener("click", function () {
  value = 4;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

five.addEventListener("click", function () {
  value = 5;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

six.addEventListener("click", function () {
  value = 6;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

seven.addEventListener("click", function () {
  value = 7;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

eight.addEventListener("click", function () {
  value = 8;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

nine.addEventListener("click", function () {
  value = 9;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

zero.addEventListener("click", function () {
  value = 0;
  result.innerText += value;
  input += value;
  console.log(value);
  return value;
});

// OPERATIONS BUTTONS
sum.addEventListener("click", function () {
  operator = "+";
  console.log("+");
  inputs.push(parseFloat(input)); //sekogas koga kjese klikne na operator brojkite pred operatorot kje se zacuvaat kako eden input vo inputs
  operators.push("+");
  input = ""; //kje se izbrise input promanivata za da go primi sledniot broj
  result.innerText += "+";
});

substraction.addEventListener("click", function () {
  operator = "-";
  console.log("-");
  inputs.push(parseFloat(input));
  operators.push("-");
  input = "";
  result.innerText += "-";
});

multiply.addEventListener("click", function () {
  operator = "*";
  console.log("*");
  inputs.push(parseFloat(input));
  operators.push("*");
  input = "";
  result.innerText += "*";
});

divide.addEventListener("click", function () {
  operator = "/";
  console.log("/");
  inputs.push(parseFloat(input));
  operators.push("/");
  input = "";
  result.innerText += "/";
});

// DECIMAL FUNCTION
decimal.addEventListener("click", function () {
  if (input.includes(".")) {
    alert("You are adding more than one decimal space in the same number.");
    return;
  }
  input += ".";
  result.innerText += ".";
  isDecimalUsed = true;
});

// EQUAL FUNCTION
equal.addEventListener("click", function () {
  if (input !== "") {
    inputs.push(parseFloat(input));
    input = "";
  }

  if (inputs.length < 2 || operators.length < 1) {
    alert("Error:You are missing an operator or an input");
    reset(); //nova presmetka
    return;
  }

  calculate();
});

// RESET FUNCTION
function reset() {
  input = "";
  inputs = [];
  operators = [];
  isDecimalUsed = false;
  result.innerText = "";
}

//EVENT LISTENER RESET BUTTON
resetBTN.addEventListener("click", reset); //za reset button

// // CALCULATE FUNCTION

// vo slucaj ako ne sledi prednost na operacii primer 2+3*4 kje dade 20 prvo kje soberi pa pomnozi kako sto odi po redosled, probav ova da go resam so dva for ciklusi namesto eden

// function calculate() {
//   let result1 = inputs[0]; //prviot broj

//   for (let i = 0; i < operators.length; i++) { //dozlinata na nizata so operatori e za 1 pomala od nizata so broevi
//     switch (operators[i]) {
//       case "+":
//         result1 += inputs[i + 1];
//         break;
//       case "-":
//         result1 -= inputs[i + 1];
//         break;
//       case "*":
//         result1 *= inputs[i + 1];
//         break;
//       case "/":
//         if (inputs[i + 1] !== 0) {
//           result1 /= inputs[i + 1];
//         } else {
//           alert("Error: You are dvividing by zero");
//           reset(); //da napravi reset na premetkata
//           return;
//         }
//         break;
//       default:
//         alert("Error: Invalid operator");
//         reset();
//         return;
//     }
//   }
//   result.innerText = result1;
// }

// CALCULATE FUNCTION

function calculate() {
  if (inputs.length === 0) {
    alert("Error: Put in an input");
    reset();
    return;
  }

  let result1 = inputs[0]; //prviot broj
  let newInput = []; //za vtorata serija na presmetki
  let newOperators = [];

  for (let i = 0; i < operators.length; i++) {
    if (typeof inputs[i + 1] === "undefined") {
      alert("Error: Missing number after operator");
      reset();
      return;
    }
    //prvo da presmeta mnozenje i delenje
    if (operators[i] === "*" || operators[i] === "/") {
      switch (operators[i]) {
        case "*":
          result1 *= inputs[i + 1];
          break;
        case "/":
          if (inputs[i + 1] !== 0) {
            result1 /= inputs[i + 1];
          } else {
            alert("Error: Division by zero");
            reset();
            return;
          }
          break;
      }
    } else {
      newInput.push(result1);
      newOperators.push(operators[i]);
      result1 = inputs[i + 1];
    } //sekade kade sto nema mnozenje i delenje samo kje go skokne i dodade na novata niza
  }
  newInput.push(result1); //ako ima mnozenje i delenje rezultatot kje go dodae vo novata niza
  console.log(result1);
  console.log("new inputs " + newInput);
  console.log("new operators " + newOperators);

  // Sobiranje i odzemanje
  let result2 = newInput[0]; //sega premetuvanje so novata niza
  for (let i = 0; i < newOperators.length; i++) {
    if (typeof newInput[i + 1] === "undefined") {
      alert("Error: Missing number after operator");
      reset();
      return;
    }

    switch (newOperators[i]) {
      case "+":
        result2 += newInput[i + 1];
        break;
      case "-":
        result2 -= newInput[i + 1];
        break;
      default:
        alert("Error: Invalid operator");
        reset();
        return;
    }
  }
  result.innerText = result2; //na kraj kje go pokaze samo vtoriot rezultat (nema da ima megju rezultati)
  console.log(result2);
}

//TEST

//Ako se vnese primer 2.5 + 3 / 4
// inputs=[2.5;3;4] operators=[+,/]  kje go zeme prvo 2.5 kako result1 pa kje go pomine ciklusot nema da najde mnozenje i deleje kje go zacuva vo novata niza newInputs, pa kje go dodade + vo newOperators
//kje odi na slednoto 3 kje go zacuva kako result1=3, kje vlese pak vo ciklusot kje ja izvrsi operacijata 3/4 i kje zacuva result1=0.75 vo nizata newInputs
//kje prekine prviot ciklus zosto site operatori se pominati
// za vtoriot for ciklus newInputs=[2.5;0.75]  operators=[+]  i na kraj result=3.25
