// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

//Global variables
let movieNames = ["Oppenhaimer", "Avangers", "The lion king"];
let name = document.getElementById("movieName");
let btn = document.getElementById("btn");
let message = document.getElementById("message");

//Functions
function searchForMovie() {
  let movieName = name.value;
  for (let movie of movieNames) {
    if (movieName.toLowerCase() === movie.toLowerCase()) {
      //za da ne bide case sensitive site gi napraviv vo lower case istoto moze da se napravi i ako se site vo upper case
      message.innerText = "The movie can be rented";
      message.style.color = "green";
      break;
    } else {
      message.innerText = "The movie can't be rented";
      message.style.color = "red";
    }
  }
  name.value = ""; //reset za da moze da se prebara vednas za drug film
}

//Events
btn.addEventListener("click", function () {
  searchForMovie();
});
