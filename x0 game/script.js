let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameStatus = document.querySelector('.status');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      gameStatus.textContent = `Player ${currentPlayer}'s turn`;
    }
  });
});

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      gameStatus.textContent = `Player ${cells[a].textContent} wins!`;
      cells.forEach(cell => cell.removeEventListener('click', () => {}));
      return;
    }
  }

  if ([...cells].every(cell => cell.textContent !== '')) {
    gameStatus.textContent = "It's a draw!";
  }
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', () => {
      if (!cell.textContent) {
        cell.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameStatus.textContent = `Player ${currentPlayer}'s turn`;
      }
    });
  });
  gameStatus.textContent = 'Player X\'s turn';
  currentPlayer = 'X';
}
