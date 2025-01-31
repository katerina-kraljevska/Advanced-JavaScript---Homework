//TASK 1

// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.py4e.com/api/planets/?page=1

//TASK 2

// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.py4e.com/api/planets/?page=2

//URL
const url1 = "https://swapi.py4e.com/api/planets/?page=1";
const url2 = "https://swapi.py4e.com/api/planets/?page=2";

let previousBTN = document.getElementById("prevousBTN");
let nextBTN = document.getElementById("nextBTN");

//BUTTON DISPLAY
function showNextBTN() {
  nextBTN.style.display = "block";
  previousBTN.style.display = "none";
}
function showPrevousPage() {
  nextBTN.style.display = "none";
  previousBTN.style.display = "block";
}

//EVENT LISTENERS
document.getElementById("planetsBTN").addEventListener("click", function () {
  getPlanets(url1);
  showNextBTN();
});

document.getElementById("nextBTN").addEventListener("click", function () {
  getPlanets(url2);
  showPrevousPage();
});

document.getElementById("previousBTN").addEventListener("click", function () {
  getPlanets(url1);
  showNextBTN();
});

//FUNCTIONS

//GET API
function getPlanets(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showPlanets(data.results);
      showPrevNextPageBtn();
    })
    .catch((error) => console.error("Error fetching data:", error));
}

//SHOW PLANETS IN TABLE
function showPlanets(planets) {
  let html = "";
  for (let planet of planets) {
    html += `<tr>
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
        </tr>`;
  }
  document.getElementById("tbody").innerHTML = html;
}
