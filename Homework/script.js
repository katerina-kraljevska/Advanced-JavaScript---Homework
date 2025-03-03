//VARIABLES
let cars = [];
const url = "./car.json";

//FETCH
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    cars = data;
    showCars(cars);
  })
  .catch((error) => console.error("Error:", error));

//SHOW CARS
function showCars(cars) {
  const table = document.getElementById("table");

  if (cars.length === 0) {
    table.innerHTML = ""; //tabelata da ja izbrise samo da ostane kako poraka
    table.innerHTML = `<tr><td style="background-color: rgba(255, 0, 0, 0.858)">No cars found</td></tr>`;
  } else {
    let html = cars
      .map(
        (car) => `
      <tr>
        <td>${car.type}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.doors}</td>
        <td>${car.gasType}</td>
        <td>${car.color}</td>
        <td>${car.isNew ? "New" : "Old"}</td>
        <td>${car.horsepower}</td>
      </tr>`
      )
      .join("");
    tbody.innerHTML = html;
  }
}

function resetFilters() {
  document.getElementById("type").value = "All";
  document.getElementById("brand").value = "All";
  document.getElementById("model").value = "";
  document.getElementById("doors").value = "";
  document.getElementById("gasType").value = "All";
  document.getElementById("color").value = "All";
  document.getElementById("old").checked = false;
  document.getElementById("new").checked = false;
  document.getElementById("horsepower").value = "";

  showCars(cars);
}

function selectedCars(cars) {
  let filteredCars = cars.filter((car) => {
    //EVENT LISTENERS
    let selectedType = document.getElementById("type").value;
    let selectedBrand = document.getElementById("brand").value;
    let selectedModel = document.getElementById("model").value;
    let selectedDoors = document.getElementById("doors").value;
    let selectedGasType = document.getElementById("gasType").value;
    let selectedColor = document.getElementById("color").value;
    let selectedOld = document.getElementById("old").checked;
    let selectedNew = document.getElementById("new").checked;
    let selectedHorsepower = document.getElementById("horsepower").value;

    // TRUE OR FALSE FILTER CARS
    let typeMatch;
    if (selectedType) {
      typeMatch = car.type === selectedType;
    } else {
      typeMatch = true;
    }

    let brandMatch;
    if (selectedBrand) {
      brandMatch = car.brand === selectedBrand;
    } else {
      brandMatch = true;
    }

    //kaj tie sto se so select ako e se klinati select all treba site da gi prikaze
    let modelMatch;
    if (selectedModel) {
      modelMatch = car.model.toLowerCase() === selectedModel.toLowerCase(); //za da moze da gi sporedi
    } else {
      modelMatch = true;
    }

    // Convert doors to string to match input (since number input is treated as a string)
    let doorsMatch;
    if (selectedDoors) {
      doorsMatch = car.doors.toString() === selectedDoors;
    } else {
      doorsMatch = true;
    }

    let gasTypeMatch;
    if (selectedGasType) {
      gasTypeMatch = car.gasType === selectedGasType;
    } else {
      gasTypeMatch = true;
    }

    let colorMatch;
    if (selectedColor) {
      colorMatch = car.color === selectedColor;
    } else {
      colorMatch = true;
    }

    //ako e oldCar togas isNew e false znaci true kje bide deka e selektirano, ako isNew e true togas treba newCarMatch da e true
    let oldCarMatch;
    if (selectedOld) {
      oldCarMatch = car.isNew === false;
    } else {
      oldCarMatch = true;
    }

    let newCarMatch;
    if (selectedNew) {
      newCarMatch = car.isNew === true;
    } else {
      newCarMatch = true;
    }

    //site inputs se string
    let horsepowerMatch;
    if (selectedHorsepower) {
      horsepowerMatch = car.horsepower.toString() === selectedHorsepower;
    } else {
      horsepowerMatch = true;
    }
    //sekade default kje bide da gi prikaze site koli
    return (
      typeMatch &&
      brandMatch &&
      modelMatch &&
      doorsMatch &&
      gasTypeMatch &&
      colorMatch &&
      oldCarMatch &&
      newCarMatch &&
      horsepowerMatch
    );
  });

  showCars(filteredCars);
}

let searchBTN = document.getElementById("SearchBTN");
if (searchBTN) {
  searchBTN.addEventListener("click", function () {
    selectedCars(cars);
  });
}

let resetBTN = document.getElementById("resetBTN");
resetBTN.addEventListener("click", function () {
  resetFilters();
});
