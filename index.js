import express from "express";
import bodyParser from "body-parser";
import countries from "./quiz.js";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Umožňuje zpracování JSON dat
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};
let totalCorrect = 0;

let userChoice = "capital";
let choiceDisplayName = "Hlavní města";
let userContinent = "world";
let choiceDisplayContinent = "Svět";

// Pro překlad názvů kontinentů
const continentTranslations = {
  world: "Svět",
  Europe: "Evropa",
  Asia: "Asie",
  Africa: "Afrika",
};

// Funkce pro aktualizaci zobrazení vybraného kontinentu
function updateContinentDisplay(continent) {
  console.log("Chosen continent: " + continent);
  // Pokud je kontinent vybrán, zobrazí se český název
  if (continent) {
    choiceDisplayContinent = continentTranslations[continent] || continent;
  }
  console.log("ChoiceDisplayContinent: " + choiceDisplayContinent);
}

// Funkce pro načítání další otázky
async function nextQuestion() {
  console.log("Continents in dataset: ", [
    ...new Set(countries.map((country) => country.continent)),
  ]);

  let filteredQuestions = countries;

  // Výběr z kategorií
  if (userChoice) {
    filteredQuestions = countries.filter((country) => {
      switch (userChoice) {
        case "capital":
          return country.capital !== undefined;
        case "currency":
          return country.currency !== undefined;
        case "MPZ":
          return country.MPZ !== undefined;
        case "location":
          return country.location !== undefined;
        case "religion":
          return country.religion !== undefined;
        case "stateSystem":
          return country.stateSystem !== undefined;
        default:
          return true;
      }
    });
  }

  updateContinentDisplay(userContinent); // Nastaví český název pro zobrazení

  // Filtrování otázek podle kontinentu
  if (userContinent !== "world") {
    console.log("Current userContinent:", userContinent);
    filteredQuestions = filteredQuestions.filter(
      (country) => country.continent === userContinent
    );
  }

  // Pokud žádná otázka neodpovídá filtrům, resetuje na původní otázky
  if (filteredQuestions.length === 0) {
    console.log("No questions matched the filter, resetting to all questions.");
    filteredQuestions = countries;
  }

  // Náhodný výběr otázky
  const randomCountry =
    filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
  currentQuestion = randomCountry;
}

// Hlavní stránka
app.get("/", async (req, res) => {
  totalCorrect = 0; //Vynulování skóre při načtení úvodní stránky
  await nextQuestion(); // Zavolání funkce pro načtení další otázky
  // Vykreslení šablony index.ejs s předanými daty
  res.render("index.ejs", {
    question: currentQuestion.state, // Zobrazí název státu
    continent: choiceDisplayContinent, // Zobrazí název kontinentu
    choice: choiceDisplayName, // Zobrazí název kategorie
    totalScore: totalCorrect, // Zobrazí celkové skóre
    wasCorrect: null, // Indikátor správnosti odpovědi
  });
});

// Výběr uživatele
app.post("/select-choice", async (req, res) => {
  const { choice, continent } = req.body;
  console.log(req.body);

  // Aktualizace volby
  userChoice = choice;
  console.log("Updated userChoice: " + userChoice);

  if (choice) {
    switch (choice) {
      case "capital":
        choiceDisplayName = "Hlavní města";
        break;
      case "currency":
        choiceDisplayName = "Měna";
        break;
      case "MPZ":
        choiceDisplayName = "MPZ";
        break;
      case "location":
        choiceDisplayName = "Lokace";
        break;
      case "religion":
        choiceDisplayName = "Vyznání";
        break;
      case "stateSystem":
        choiceDisplayName = "Státní systém";
        break;
    }
  }

  console.log("Continent: " + continent);

  // Aktualizace výběru kontinentu pouze pokud je vybrán
  if (continent) {
    userContinent = continentTranslations[continent] || continent;
  }

  console.log("Updated userContinent: " + userContinent);
  updateContinentDisplay(userContinent); // Aktualizace zobrazení kontinentu

  await nextQuestion(); // Načte novou otázku na základě volby

  // Vrátí JSON odpověď
  res.json({
    question: currentQuestion.state,
    choice: choiceDisplayName,
    continent: choiceDisplayContinent,
    totalScore: totalCorrect,
  });
});

// Zpracování odpovědi
app.post("/submit", async (req, res) => {
  let answer = req.body.answer.trim(); // Získání odpovědi z těla požadavku
  let isCorrect = false;
  let correctAnswer = "";

  console.log("User's answer: " + answer);

  // Kontrola správnosti odpovědi
  switch (userChoice) {
    case "capital":
      if (
        currentQuestion.capital &&
        currentQuestion.capital.toLowerCase() === answer.toLowerCase()
      )
        isCorrect = true;
      break;
    case "currency":
      if (
        currentQuestion.currency &&
        currentQuestion.currency.toLowerCase() === answer.toLowerCase()
      )
        isCorrect = true;
      break;
    case "MPZ":
      if (
        currentQuestion.MPZ &&
        currentQuestion.MPZ.toLowerCase() === answer.toLowerCase()
      )
        isCorrect = true;
      break;
    case "location":
      if (
        currentQuestion.location &&
        currentQuestion.location.toLowerCase() === answer.toLowerCase()
      )
        isCorrect = true;
      break;
    case "religion":
      if (
        currentQuestion.religion &&
        currentQuestion.religion.toLowerCase() === answer.toLowerCase()
      )
        isCorrect = true;
      break;
    case "stateSystem":
      if (
        currentQuestion.stateSystem &&
        currentQuestion.stateSystem.toLowerCase() === answer.toLowerCase()
      )
        isCorrect = true;
      break;
    default:
      isCorrect = false;
  }

  correctAnswer = currentQuestion[userChoice]; // Nastavení správné odpovědi

  console.log("Correct answer from currentQuestion: " + correctAnswer);

  if (isCorrect) totalCorrect++;

  await nextQuestion(); // Načtení nové otázky na základě volby

  console.log("Rendering EJS with values:");
  console.log("Question:", currentQuestion.state);
  console.log("Continent:", choiceDisplayContinent);
  console.log("Choice:", choiceDisplayName);
  console.log("Was Correct:", isCorrect);
  console.log("Total Score:", totalCorrect);
  console.log("Answer:", correctAnswer);

  res.render("index.ejs", {
    question: currentQuestion.state || "", // Zobrazí název státu nebo prázdný řetězec
    continent: choiceDisplayContinent, // Zachová aktuální kontinent
    choice: choiceDisplayName, // Zachová aktuální volbu
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
    answer: correctAnswer, // Předání správné odpovědi do šablony
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
