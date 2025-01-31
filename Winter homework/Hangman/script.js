//CATEGORIES,WORDS AND HINTS

const categories = {
  tvShows: {
    words: [
      "Breaking Bad",
      "Friends",
      "Doctor Who",
      "The Office",
      "Game of Thrones",
    ],
    hints: [
      "A chemistry teacher turns to cooking meth",
      "Six friends navigate life and love in NYC.",
      "A time-traveling alien saves the universe.",
      "Hilarious chaos in a paper company.",
      "Epic battles for a throne in Westeros.",
    ],
  },
  films: {
    words: [
      "The Matrix",
      "Star Wars",
      "Titanic",
      "Toy Story",
      "Gone with the Wind",
    ],
    hints: [
      "Reality is an illusion controlled by machines.",
      "Rebels fight an evil empire.",
      "Romance aboard a doomed ship.",
      "Toys come to life.",
      "A sweeping Civil War epic.",
    ],
  },
  books: {
    words: [
      "To Kill a Mockingbird",
      "The Da Vinci Code",
      "Atomic Habits",
      "Crime and Punishment",
      "Dune",
    ],
    hints: [
      "Racism and justice in the Deep South.",
      "A murder unlocks ancient secrets.",
      "Build habits that stick.",
      "A man grapples with murder.",
      "Politics and prophecy on a desert planet.",
    ],
  },
};

//ALPHABET
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//GLOBAL VARIABLES
let wordGuess = "";
let hint = "";
let usedLetters = [];
let words = [];
let hints = [];

//EVENT LISTENERS
let game = document.getElementById("game");
let newGame = document.getElementById("new-game");
let TVShowsBTN = document.getElementById("tv-shows");
let booksBTN = document.getElementById("books");
let filmsBTN = document.getElementById("films");
let play = document.getElementById("play");
let category = document.getElementById("category");
let wordSpaces = document.getElementById("word-spaces");
let lives = 10;
let livesNumber = document.getElementById("lives");
let hintBTN = document.getElementById("hint");
let clue = document.getElementById("clue");
let resetBTN = document.getElementById("reset");
let buttons = document.getElementById("buttons");
let listOfLetters = document.getElementById("listOfLetters");
let img = document.getElementById("image");

//OBJECTS
let word = {
  wordGuess: wordGuess,
  hint: hint,
};

//FUNCTIONS

//HANGMAN IMAGES
function hangman() {
  let id = lives - 1;
  img.innerHTML = ""; //da ja prebrise slikata sto ja ima default
  img.innerHTML = `<img
          src="./images/${id}.png"
          alt="10 lives"
          id="img-${id}"
          style="display: block"
        />`;
}

// SELECT WORD
function selectWord() {
  let randomNum = Math.floor(Math.random() * 5); // broj od 1 do 5, zosto po 5 elementi staviv vo site kategorii
  word.wordGuess = words[randomNum]; //gi vrakja vo objektot samo tie clenovi od nizata
  word.hint = hints[randomNum];
  console.log(randomNum); //proverka
}

// LETTERS _

function letterSpaces() {
  wordSpaces.innerHTML = "";
  for (let i = 0; i < word.wordGuess.length; i++) {
    if (word.wordGuess[i] === " ") {
      wordSpaces.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;"; //ne mi ostavse prazno mesto izmegju crtickite go najdov ova na google
    } else {
      wordSpaces.innerHTML += "_ ";
    }
  }
}

//WIN OR LOSE GAME

function WinOrLose() {
  if (!wordSpaces.innerText.includes("_")) {
    alert("You win");
  } else if (lives <= 0) {
    livesNumber.innerText = "You Lose!";
    alert("You lose. Game will reset"); //reset na igrata
    game.style.display = "none";
    newGame.style.display = "block";
    wordSpaces.innerHTML = "";
    usedLetters = [];
    lives = 10;
  }
}

// GUESS LETTERS

function guessLetters(letter) {
  usedLetters.push(letter);
  let guess = false;
  let updatedWord = "";

  for (let i = 0; i < word.wordGuess.length; i++) {
    if (word.wordGuess[i].toLowerCase() === letter.toLowerCase()) {
      updatedWord += letter;
      guess = true;
    } else if (word.wordGuess[i] === " ") {
      updatedWord += "&nbsp;&nbsp;&nbsp;&nbsp; "; //prazno mesto da si ostane
    } else if (usedLetters.includes(word.wordGuess[i].toLowerCase())) {
      updatedWord += word.wordGuess[i];
    } else {
      updatedWord += "_ "; //da se vratat _
    }
  }

  wordSpaces.innerHTML = updatedWord;

  //lives
  if (!guess) {
    lives--;
    hangman(); //hangman funckijata za slikata da se smeni
    livesNumber.innerHTML = " ";
    livesNumber.innerText += `Lives: ${lives}`;
    console.log("Lives: " + lives); //proverka
  }
  WinOrLose(); //za dali da mu dozvoli da pogodi uste edna bukva ili da napravi reset
}

// ALPHABET BUTTONS

function alphabetBTN() {
  listOfLetters.innerHTML = "";
  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    let button = document.createElement("button");
    button.innerText = letter;
    button.id = `btn-${i}`;
    listOfLetters.appendChild(button);
    button.addEventListener("click", function () {
      button.disabled = true; //posle sekoj klik da se pravi diable i da se menuva bojata vo CSS
      guessLetters(letter); //na klik da se dovaat bukvi
    });
  }
}

//HINT BUTTON

function hintBtn() {
  hintBTN.addEventListener("click", function () {
    clue.innerText += ` ${word.hint}`;
    console.log(clue); //hint/clue
  });
}

//RESET BUTTON

function reset() {
  resetBTN.addEventListener("click", function () {
    game.style.display = "none";
    newGame.style.display = "block";
    wordSpaces.innerHTML = "";
    usedLetters = [];
    lives = 10;
  });
}

// NEW GAME

TVShowsBTN.addEventListener("click", function () {
  words = categories.tvShows.words;
  hints = categories.tvShows.hints;
  category.innerText += " TV Shows";
  console.log(words); //proverka dali se dodadeni nizite vo objektot za word
  console.log(hints);
});

filmsBTN.addEventListener("click", function () {
  words = categories.films.words;
  hints = categories.films.hints;
  category.innerText += " Films";
  console.log(words);
  console.log(hints);
});

booksBTN.addEventListener("click", function () {
  words = categories.books.words;
  hints = categories.books.hints;
  category.innerText += " Books";
  console.log(words);
  console.log(hints);
});

play.addEventListener("click", function () {
  game.style.display = "block";
  newGame.style.display = "none";
  console.log(words);
  console.log(hints);
  alphabetBTN();
  selectWord();
  letterSpaces();
  hintBtn();
  reset();
});
