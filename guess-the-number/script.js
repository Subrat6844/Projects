let randomNumber = Math.round(Math.random() * 100 + 1);
const submit = document.getElementById('submit');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.results');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
    
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Enter a valid Number')
    } else if (guess < 1) {
        alert('Enter a Number greater than 1')
        
    } else if (guess > 100) {
        alert('Enter a Number less than 100')
        
    } else {
        prevGuess.push(guess);
        if (numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
        
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<button id="new-Game">Start a New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}
function newGame(){
    const btn = document.querySelector('#new-Game');
    btn.addEventListener('click',(e)=>{
        randomNumber = Math.round(Math.random() * 100 + 1);
        displayMessage(``);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ``
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

