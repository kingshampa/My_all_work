function checkPalindrome() {
    const inputText = document.getElementById('input-text').value.toLowerCase();
    const reversedText = inputText.split('').reverse().join('');
    const resultElement = document.getElementById('result');
  
    if (inputText === reversedText) {
      resultElement.textContent = `"${inputText}" is a palindrome!`;
    } else {
      resultElement.textContent = `"${inputText}" is not a palindrome.`;
    }
  }
  