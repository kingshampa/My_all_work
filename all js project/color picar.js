const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33C4FF', '#F5A623', '#8B572A', '#AC33FF', '#33FFD1', '#FF3369'];

function changeColor() {
  const colorDisplay = document.getElementById('color-display');
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  colorDisplay.textContent = randomColor;
  colorDisplay.style.backgroundColor = randomColor;
}
