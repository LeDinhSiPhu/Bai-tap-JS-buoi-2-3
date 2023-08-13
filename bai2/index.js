 const numbers = [];

    function addNumber() {
      const inputElement = document.getElementById('numberInput');
      const inputValue = parseFloat(inputElement.value);

      if (!isNaN(inputValue)) {
        numbers.push(inputValue);
        inputElement.value = '';
        updateNumbersDisplay();
      } else {
        alert('Vui lòng nhập một số thực hợp lệ.');
      }
    }

    function updateNumbersDisplay() {
      const numbersDisplay = document.getElementById('numbers');
      numbersDisplay.textContent = `Các số đã nhập: ${numbers.join(', ')}`;
    }

    function calculateAverage() {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      const average = sum / numbers.length;

      const averageDisplay = document.getElementById('average');
      averageDisplay.textContent = `Trung bình cộng của 5 số thực là: ${average.toFixed(2)}`;
    }