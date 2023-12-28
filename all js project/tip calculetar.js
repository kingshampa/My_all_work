function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const tipResult = `Tip Amount: $${tipAmount}`;
    document.getElementById('tip-amount').textContent = tipResult;
  }
  