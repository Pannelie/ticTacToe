"use strict";
// TEST KOMMENTAR

/**
 * Hej syns det här?
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {};

window.addEventListener("load", () => {
  initGlobalObject();
  if (checkForGameOver() === 1) {
    console.log("Spelare 1 vann");
  } else if (checkForGameOver() === 2) {
    console.log("Spelare 2 vann");
  } else if (checkForGameOver() === 3) {
    console.log("Oavgjort");
  } else {
    console.log("Spelet fortsätter");
  }
});

/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
function initGlobalObject() {
  //Datastruktur för vilka platser som är lediga respektive har brickor
<<<<<<< HEAD
  //Genom at fylla i här med antingen X eler O kan ni testa era rättningsfunktioner
=======
  //Genom at fylla i här med antingen X eler O kan ni testa era rättningsfunktioner.
  oGameData.gameField = ["X", "X", "X", "", "", "", "", "", ""];

  /* Testdata för att testa rättningslösning */
  //oGameData.gameField = ['X', 'X', 'X', '', '', '', '', '', ''];
  //oGameData.gameField = ['X', '', '', 'X', '', '', 'X', '', ''];
  //oGameData.gameField = ['X', '', '', '', 'X', '', '', '', 'X'];
  //oGameData.gameField = ['', '', 'X', '', 'X', '', 'X', '', ''];
  //oGameData.gameField = ['X', 'O', 'X', '0', 'X', 'O', 'O', 'X', 'O'];

<<<<<<< HEAD
=======
  // legge alle gameFields inni et objekt???

>>>>>>> e27afec0a434823d6e1658d78a3de9cfeda7cc29
  //Indikerar tecknet som skall användas för spelare ett.
  oGameData.playerOne = "X";

  //Indikerar tecknet som skall användas för spelare två.
  oGameData.playerTwo = "O";

  //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
  oGameData.currentPlayer = "";

  //Nickname för spelare ett som tilldelas från ett formulärelement,
  oGameData.nickNamePlayerOne = "";

  //Nickname för spelare två som tilldelas från ett formulärelement.
  oGameData.nickNamePlayerTwo = "";

  //Färg för spelare ett som tilldelas från ett formulärelement.
  oGameData.colorPlayerOne = "";

  //Färg för spelare två som tilldelas från ett formulärelement.
  oGameData.colorPlayerTwo = "";

  //Antalet sekunder för timerfunktionen
  oGameData.seconds = 5;

  //Timerns ID
  oGameData.timerId = null;

  //Från start är timern inaktiverad
  oGameData.timerEnabled = false;

  //Referens till element för felmeddelanden
  oGameData.timeRef = document.querySelector("#errorMsg");
}

/**
 * Kontrollerar för tre i rad genom att anropa funktionen checkWinner() och checkForDraw().
 * Returnerar 0 om spelet skall fortsätta,
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */
function checkForGameOver() {
  if (checkWinner(oGameData.playerOne)) {
    //Om detta är true så går den inte vidare till nästa else if. och returnerar värdet 1. Som ger console.log att spelareOne vinner
    return 1;
  } else if (checkWinner(oGameData.playerTwo)) {
    //Om detta är true så går den inte vidare till nästa else if. och returnerar värdet 2. Som ger console.log att spelareTwo vinner
    return 2;
  } else if (checkForDraw()) {
    //Om detta är true så går den inte vidare till nästa else. och returnerar värdet 3. Som ger console.log att det är oavgjort.
    return 3;
  } else {
    //Om detta är true så fortsätter spelet och det är nästa spelares tur.
    return 0;
  }
}

// Viktigt att funktionen returnerar true eller false baserat på om den inskickade spelaren är winner eller ej
function checkWinner(playerIn) {
  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [2, 4, 6],
    [0, 4, 8], // Diagonal
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    //loopar igenom tills winCombinations är slut
    let combination = winCombinations[i]; // när jag loopar igenom winCombinations vill jag spara [i] i variabeln let combination.
    //                                     //Den plockar ut en array som innehåller 0,1,2 och sparar in combination

    let cellA = oGameData.gameField[combination[0]]; //Jag letar upp det första värdet(som är ett index) i t.ex. [3,4,5] arrayen.
    // Jag får ut index 3. Vilket innebär oGameData.gameField[index3]
    let cellB = oGameData.gameField[combination[1]];
    // Jag får ut index 4. Vilket innebär oGameData.gameField[index4]
    let cellC = oGameData.gameField[combination[2]];
    // Jag får ut index 5. Vilket innebär oGameData.gameField[index5]

    if (
      cellA === playerIn &&
      // Här undrar jag om cellA är strikt lika med vår parameter playerIn
      // (parametern playerIn står för argumentet som skickas in när funktionen checkWinner anropas inifrån funktionen checkForGameover
      // med i detta fall argument playerOne/ playerTwo som ersätter parametern playerIn)
      // Det står alltså med andra ord:
      //cellA === playerOne alternativt cellA === playerTwo
      // om vi kollar deklarationen av playerOne och playerTwo så är de definierade med string "X" och "O". Vi jämför två strings i slutändan.
      //cellA === "X" alternativt cellA === "O"
      cellA === cellB &&
      //Om vi nu vet att första kravet är att cellA är samma som playerIn, räcker det att veta att cellA är lika med övriga celler. De stämmer då även med playerIn
      cellA === cellC
    ) {
      console.log(`winner is ${playerIn}`);
      //console.log(Winner is X)
      return true;
      //returnerar true / sant om ovanstående påstående stämmer. Detta kan checkForGamerover hantera, det var inuti den som funktionen checkWinner anropades ifrån.
    }
  }
  return false;
  //returnerar false / falskt om ovanstående påstående inte stämmer och det inte heller finns något mer att loopa igenom.
  // När det är false kan checkForGameover inte returnera de första två delarna i if-satsen och deklarera en vinnare.
  // checkForGameover går då vidare till att kontrollera sitt nästa funktionsanrop: checkForDraw och om det är true
}

//Kontrollera om alla platser i oGameData.GameField är fyllda. Om sant returnera true, annars false.
function checkForDraw() {
  for (i = 0; i < oGameData.GameField.length; i++) {
    //Vi använder en for-loop till att loopa igenom antalet alternativ på spelbrädet
    if (oGameData.GameField[i] === "") {
      // Om i (index) någon gång visar sig ha värdet "" kommer funktionen returnera false.
      return false;
    }
  }
  return true; // Om däremot vi loopar igenom hela vårt bräde och ingen visar sig innehålla "" returnerar den true.
  // Detta kan checkForGamerover hantera, det var inuti den som funktionen checkForDraw anropades ifrån.
}

// Nedanstående funktioner väntar vi med!

function prepGame() {}

function validateForm() {}

function initiateGame() {}

function executeMove(event) {}

function changePlayer() {}

function timer() {}

function gameOver(result) {}
