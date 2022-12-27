//variables 

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementsByClassName('button')
const resetButton = document.getElementById('reset')
const playerImg = document.getElementById("player-image")
const computerImg = document.getElementById('computer-image')

// Undefined variables for later use
let userChoice;
let computerChoice;
let result;
let oldComputerScore;
let oldYourScore;
let yourNewScore = document.getElementById("your-score")
let computerNewScore = document.getElementById("computer-score")

//Wait for the DOM to finnish loading before start
//Get the button elements by class name and and add event listeners to them
// Display user choice

document.addEventListener("DOMContentLoaded", init());

function init() {
    for (let possibleChoice of possibleChoices) {
        possibleChoice.addEventListener("click", function() {
            userChoice = this.getAttribute("data-type"); 
            userChoiceDisplay.innerHTML = userChoice;
            generateComputerChoice()
            getResult();
            resetGame()
            });
        };
    };

    /**
     * Generate the computer choice and 
     * display according image
     */
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // + 1 for readability and you can also use .length
    if (randomNumber === 1) {
        computerChoice = 'rock'
        computerImg.src = 'assets/images/rock.jpg'
        computerImg.alt = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
        computerImg.src = 'assets/images/paper.jpg'
        computerImg.alt = 'Rock'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
        computerImg.src = 'assets/images/scissors.jpg'
        computerImg.alt = 'Scissors'

    }
    computerChoiceDisplay.innerHTML = computerChoice;

}



/**
 * Get results in different game scenarios
 * and display round result
 */
function getResult() {

    if (computerChoice === userChoice) {
        result = 'Draw!'
    } else if (computerChoice === 'rock' && userChoice ==='paper') {
        result = 'Paper beats rock! You get a point!'
        incrementScore()
        //displayPaper()
    } else if (computerChoice === 'rock' && userChoice ==='scissors') {
        result = 'Rock beats scissors! Computer get a point!'
        incrementComputerScore()
        //displayScissors()
    } else if (computerChoice === 'paper' && userChoice ==='scissors') {
        result = 'Scissors beats paper! You get a point!'
        incrementScore()
        //displayScissors()
    } else if (computerChoice === 'paper' && userChoice ==='rock') {
        result = 'Paper beats rock! Computer get a point!'
        //displayRock()
        incrementComputerScore()
    } else if (computerChoice === 'scissors' && userChoice ==='rock') {
        result = 'Rock beats scissors! You get a point!'
        incrementScore()
        //displayRock()
    } else if (computerChoice === 'scissors' && userChoice ==='paper') {
        result = 'scissors beats paper! Computer get a point!'
        incrementComputerScore()
        //displayPaper()
    } else {
        alert(`Choose Rock, Paper or scissors!`);
        throw `unidentified choice`;
    }

    resultDisplay.innerHTML = result  
    showImage ()
} 

/**
 * Display user image depending on userchoice
 */
function showImage (){
    if (userChoice === 'rock') {
        playerImg.src = `assets/images/rock.jpg`;
    } else if (userChoice === 'paper') {
        playerImg.src = `assets/images/paper.jpg`;
    } else {
        playerImg.src = `assets/images/scissors.jpg`;
    }
}
/**
 * Increment current score and set it to a maximum of 5 points.
 * Display a formerly hidden div that congratulate you if you win.
 */
function incrementScore() {
    if (computerNewScore.innerText <= 5 || yourNewScore.innerText <= 5) {
        oldYourScore = parseInt(document.getElementById("your-score").innerText);
        yourNewScore.innerText = ++oldYourScore;
        resetGame()
    }


    if (oldYourScore === 5) { 
        winLose = document.getElementById('win-or-lose')
        winLose.innerText = 'Congratulations! You won! Press the restart game button to go again!';
        hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.style.backgroundColor = 'green';

    }

}

/**
 * Increment current score and set it to a maximum of 5 points.
 * Display a formerly hidden div that congratulate you if you win.
 */

function incrementComputerScore() {
    if (computerNewScore.innerText <= 5 || yourNewScore.innerText <= 5) {
        oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
        computerNewScore.innerText = ++oldComputerScore;
        resetGame()
    }


    if (oldComputerScore === 5) {
        winLose = document.getElementById('win-or-lose')
        winLose.innerText = 'You Lost! Press the restart game button to go again!';
        hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.style.backgroundColor = 'red';


    }

    
}

 /**
  * Add event listener to reset button and sets computer and user score to 0. Resets the game.
  */

function resetGame() {
    resetButton.addEventListener('click', function(){
    oldComputerScore = 0
    oldYourScore = 0
    
    document.getElementById("computer-score").innerText = 0
    yourNewScore.innerText = 0
    })

    removeWinLose()
    };

function removeWinLose() {
    winLose = document.getElementById('win-or-lose')
    winLose.innerText = '';
    hiddenDiv = document.getElementById('hidden-div');
    hiddenDiv.style.backgroundColor = '';
}


