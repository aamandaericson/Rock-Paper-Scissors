const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementsByClassName('button')
let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()

})) 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
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
        result = `It's a draw!`
    }
    if (computerChoice === 'rock' && userChoice ==='paper') {
        result = 'You Win'
        incrementScore()
    }
    if (computerChoice === 'rock' && userChoice ==='scissors') {
        result = 'You Lost'
        incrementComputerScore()
    }
    if (computerChoice === 'paper' && userChoice ==='scissors') {
        result = 'You Win'
        incrementScore()
    }
    if (computerChoice === 'paper' && userChoice ==='rock') {
        result = 'You Lose'
        incrementComputerScore()
    }
    if (computerChoice === 'scissors' && userChoice ==='rock') {
        result = 'You Win'
        incrementScore()
    }
    if (computerChoice === 'scissors' && userChoice ==='paper') {
        result = 'You Lose'
        incrementComputerScore()
    }

    resultDisplay.innerHTML = result

    

}
/* Detta är taget från Love maths (increment score) och sen har jag skrivit kod för att alerta om att datorn vunnit. Behöver här ha möjlighet att starta om spelet när detta nås. 
 Kanske typ sätta upp en div istället för alert som meddelar om att man vinner. Kanske färga grön eller röd beroende på vinst eller förlust och sedan kanske en knapp för att starta om. Kanske en bra ide att ha
en omstartsknapp hur som helst så att man när som helst kan starta om. Detta gör ju då att jag måste attackera knapparna på annat sätt i början för att kunna ha ännu en knapp vilket ju är vad jag vill eftersom 
det annars blir en rak kopia av youtube videon. Så kolla igen hur jag når knapparna på annat vis. Kan jag använda en submit istället för att starta om? Kanske inte men jag vill ju hur som helst nå på annat vis. */
function incrementScore() {
    let oldYourScore = parseInt(document.getElementById("your-score").innerText);
    document.getElementById("your-score").innerText = ++oldYourScore;

    if (oldYourScore === 3) {
        winLose = document.getElementById('win-or-lose')
        winLose.innerText = 'You won!';
        hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.style.backgroundColor = 'green';
        hiddenDiv.style.height = '40px';
    }

    

}
// Detta är taget från Love maths (increment score) och sen har jag skrivit kod för att alerta om att datorn vunnit. Behöver här ha möjlighet att starta om spelet när detta nås.
function incrementComputerScore() {
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldComputerScore;
    if (oldComputerScore === 3) {
        winLose = document.getElementById('win-or-lose')
        winLose.innerText = 'You Lost!';
        hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.style.backgroundColor = 'red';
        hiddenDiv.style.height = '40px';
    }


}


