function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('bmi-result').textContent = 'Please enter valid height and weight.';
      return;
    }
  
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    const bmiResult = `Your BMI is: ${bmi}`;
    document.getElementById('bmi-result').textContent = bmiResult;
  }
  