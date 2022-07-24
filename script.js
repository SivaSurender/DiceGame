'use strict';
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const activePlayer0 = document.querySelector(".player--0");
const activePlayer1 = document.querySelector(".player--1");
const rollDice = document.querySelector(".btn--roll");
const currentPlayerEl0 = document.getElementById("current--0");
const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");

score0El.textContent = 0;
score1El.textContent = 0;
let activePlayer = 0;
let gameActive = true;
let arrayScore = [0, 0];

diceEl.classList.add("hidden");

// storing the player score
let currentPlayerScore = 0;

//switch player function

const switchPlayerFunction = () => { 
     document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentPlayerScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            activePlayer0.classList.toggle("player--active");
            activePlayer1.classList.toggle("player--active");

};


rollDice.addEventListener("click", () => {

    if (gameActive) {

        let randomScore = Math.trunc(Math.random() * 6) + 1
        console.log(randomScore);

        //display the random score in the dice in UI
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${randomScore}.png`;

        //check if random score ! =0
        if (randomScore !== 1) {
            document.getElementById(`current--${activePlayer}`).textContent = currentPlayerScore;
            currentPlayerScore += randomScore;
      
        }

        else {
            switchPlayerFunction();
        }
    }
});

holdButton.addEventListener("click", () => {
    if (gameActive) {
        arrayScore[activePlayer] += currentPlayerScore;
        document.getElementById(`score--${activePlayer}`).textContent = arrayScore[activePlayer];

        if (arrayScore[activePlayer] >= 100) {
            gameActive = false;
            document.getElementById(`name--${activePlayer}`).textContent = ` Congratulations! Player ${activePlayer + 1} You have won the Game 🎉🎇🎇🎉`;
            diceEl.classList.add("hidden");
            rollDice.classList.add("hidden");
            holdButton.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");

        }

        else {
            switchPlayerFunction();
        }
    }
});

newGameButton.addEventListener("click", () => {
    window.location.reload();
});
