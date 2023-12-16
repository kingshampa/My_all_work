document.getElementById('copyButton').addEventListener('click', function() {
  var textToCopy = document.getElementById('textToCopy');
  
  // Select the text in the input field
  textToCopy.select();
  textToCopy.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Optionally, change the button text or provide feedback
  this.textContent = 'Copied!';
  
  // Reset the button text after a short delay
  setTimeout(() => {
    this.textContent = 'Copy';
  }, 1500);
});
