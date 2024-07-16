let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("user-choice").textContent = `You chose: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;
    
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById("game-result").textContent = `Result: ${result}`;

    updateScore(result);
    addToHistory(userChoice, computerChoice, result);

    playSound('selection-sound');
    playSound('result-sound');
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateScore(result) {
    if (result === "You win!") {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
    } else if (result === "You lose!") {
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
}

function addToHistory(userChoice, computerChoice, result) {
    const historyLog = document.getElementById("history-log");
    const newLog = document.createElement("li");
    newLog.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    historyLog.appendChild(newLog);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("user-choice").textContent = "You chose: ";
    document.getElementById("computer-choice").textContent = "Computer chose: ";
    document.getElementById("game-result").textContent = "Result: ";
    document.getElementById("history-log").innerHTML = "";
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

function playSound(id) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
}

// Set initial theme
document.body.classList.add('light-theme');
