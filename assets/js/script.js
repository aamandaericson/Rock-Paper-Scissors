//variables 

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementsByClassName('button')
const resetButton = document.getElementById('reset')
const playerImg = document.getElementById("player-image")
const computerImg = document.getElementById('computer-image')

// Undefined variablkes for later use
let userChoice;
let computerChoice;
let result;
let oldComputerScore;
let oldYourScore;
let yourNewScore = document.getElementById("your-score")
let computerNewScore = document.getElementById("computer-score")
const differentChoices = ['rock', 'paper, scissors']





//Wait for the DOM to finnish loading before start
//Get the button elements by class name and and add event listeners to them

document.addEventListener("DOMContentLoaded", init());

function init() {
    for (let possibleChoice of possibleChoices) {
        possibleChoice.addEventListener("click", function() {
            userChoice = this.getAttribute("data-type"); 
            userChoiceDisplay.innerHTML = userChoice;
            playGame()
            generateComputerChoice()
            getResult();
            });
        };
    };

function playGame () {
    if (computerChoice ='rock') {
        computerImg.src = `assets/images/rock.jpg`
    } else if (computerChoice ='paper') {
        computerImg.src = `assets/images/paper.jpg`
    }

}


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // + 1 for readability and you can also use .length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;

}




function getResult() {

    if (computerChoice === userChoice) {
        result = 'Draw!'
    } else if (computerChoice === 'rock' && userChoice ==='paper') {
        result = 'Paper beats rock! You get a point!'
        incrementScore()
    } else if (computerChoice === 'rock' && userChoice ==='scissors') {
        result = 'Rock beats scissors! Computer get a point!'
        incrementComputerScore()
    } else if (computerChoice === 'paper' && userChoice ==='scissors') {
        result = 'Scissors beats paper! You get a point!'
        incrementScore()
    } else if (computerChoice === 'paper' && userChoice ==='rock') {
        result = 'Paper beats rock! Computer get a point!'
        incrementComputerScore()
    } else if (computerChoice === 'scissors' && userChoice ==='rock') {
        result = 'Rock beats scissors! You get a point!'
        incrementScore()
    } else if (computerChoice === 'scissors' && userChoice ==='paper') {
        result = 'scissors beats paper! Computer get a point!'
        incrementComputerScore()
    } else {
        alert(`Choose Rock, Paper or scissors!`);
        throw `unidentified choice`;
    }

    resultDisplay.innerHTML = result  
} 

function showImage (){
    if (userChoice === 'rock') {
        playerImg.src = `assets/images/rock.jpg`;
        console.log('hej')
    }
}
/* Detta är taget från Love maths (increment score) och sen har jag skrivit kod för att alerta om att datorn vunnit. Behöver här ha möjlighet att starta om spelet när detta nås. 
 Kanske typ sätta upp en div istället för alert som meddelar om att man vinner. Kanske färga grön eller röd beroende på vinst eller förlust och sedan kanske en knapp för att starta om. Kanske en bra ide att ha
en omstartsknapp hur som helst så att man när som helst kan starta om. Detta gör ju då att jag måste attackera knapparna på annat sätt i början för att kunna ha ännu en knapp vilket ju är vad jag vill eftersom 
det annars blir en rak kopia av youtube videon. Så kolla igen hur jag når knapparna på annat vis. Kan jag använda en submit istället för att starta om? Kanske inte men jag vill ju hur som helst nå på annat vis. */
function incrementScore() {
    if (yourNewScore.innerText < 5) {
        oldYourScore = parseInt(document.getElementById("your-score").innerText);
        yourNewScore.innerText = ++oldYourScore;
    }


    if (oldYourScore === 5) { 
        resetGame()
        winLose = document.getElementById('win-or-lose')
        winLose.innerText = 'Congratulations! You won! Press the restart game button to go again!';
        hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.style.backgroundColor = 'green';

    }

}
// Detta är taget från Love maths (increment score) och sen har jag skrivit kod för att alerta om att datorn vunnit. Behöver här ha möjlighet att starta om spelet när detta nås.
function incrementComputerScore() {
    if (computerNewScore.innerText < 5) {
        oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
        computerNewScore.innerText = ++oldComputerScore;
    }


    if (oldComputerScore === 5) {
        resetGame()
        winLose = document.getElementById('win-or-lose')
        winLose.innerText = 'You Lost! Press the restart game button to go again!';
        hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.style.backgroundColor = 'red';


    }

    
}

// Reset game

function resetGame() {
    resetButton.addEventListener('click', function(){
    oldComputerScore = 0
    oldYourScore = 0
    
    document.getElementById("computer-score").innerText = 0
    yourNewScore.innerText = 0
    })
    };


