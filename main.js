let submit = document.getElementById('submit-btn');

function getCompChoice() {
    return Math.floor(Math.random() * 100);
}

function userGuess() {
    let guess = document.getElementById('guess');
    return Number(guess.value);
}

function compareResult(user, computer) {
    let result = document.getElementById('result');
    if(user < computer) {
        result.innerHTML = "Too low, you loose!"
    } else if(user > computer) {
        result.innerHTML = "You win!"
    } else if(computer == computer) {
        result.innerHTML = "It's a tie!"
    }
};

function playGame() {
    let user = userGuess();
    let comp = getCompChoice();
    if(user < 1 || user > 100) {
        return result.innerHTML = "Please enter a valid number."
    }
    compareResult(user, comp);
    console.log({user, comp});
}

submit.addEventListener('click', playGame)