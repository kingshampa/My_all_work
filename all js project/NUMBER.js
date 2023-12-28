const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guess-input');
  const guessResult = document.getElementById('guess-result');

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    guessResult.textContent = 'Please enter a valid guess between 1 and 100.';
  } else {
    attempts++;

    if (userGuess === secretNumber) {
      guessResult.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else {
      const hint = userGuess < secretNumber ? 'Too low!' : 'Too high!';
      guessResult.textContent = `Incorrect. ${hint} Try again.`;
    }
  }
}
