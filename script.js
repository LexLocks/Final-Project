// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the input and message elements
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    if (userGuess === randomNumber) {
        setMessage(`Congratulations! ${randomNumber} is correct. You guessed it!`);
    } else {
        const difference = Math.abs(randomNumber - userGuess);
        const messageText = difference <= 10 ? 'Hot! Try again.' : 'Cold! Try again.';
        setMessage(messageText);
    }
}

// Function to set the message text
function setMessage(text) {
    message.textContent = text;
}
