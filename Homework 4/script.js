// Exercise
// Get bordering countries function
// Call the countries API for a country by code.
// Create a function that gets all the neighbours from a country and returns them in console
// When the call to the countries API for a country is made imidietly show the bordering countries in the console
// Example:

// https://restcountries.com/v2/alpha/mkd

// Call -> MKD

// In console:

// Country:

// macedonia object

// Neighbours:

// albania object

// greece object

// bulgaria object

// serbia object

// CountriesApi;

function getNeighbours(code) {
  const url = `https://restcountries.com/v2/alpha/${code}`; //url so kodot na kraj

  fetch(url)
    .then((response) => {
      if (response) {
        return response.json();
      } else {
        return console.log("Error");
      }
    })
    .then((data) => {
      console.log(`Country: ${data.name}`);

      if (data.borders && data.borders.length > 0) {
        let borders = data.borders.map((code) =>
          fetch(`https://restcountries.com/v2/alpha/${code}`).then((x) =>
            x.json()
          )
        );

        return Promise.all(borders);
      } else {
        console.log("No bordering countries.");
        return [];
      }
    })
    .then((neighbours) => {
      console.log("Neigbours:");
      neighbours.forEach((country) => {
        console.log(`${country.name}`);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

getNeighbours("mkd");
