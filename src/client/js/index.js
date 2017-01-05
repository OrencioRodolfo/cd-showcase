import style from './../style.css';
import * as calculator from './calculator.js';

function getInputValues() {
  return {
    sumInputs: {
      first: parseFloat(document.querySelector('#sum-first').value),
      second: parseFloat(document.querySelector('#sum-second').value),
    },
    decremInputs: {
      first: parseFloat(document.querySelector('#subtract-first').value),
      second: parseFloat(document.querySelector('#subtract-second').value),
    }
  };
}

window.calc = function calc(operation) {
  const { sumInputs, decremInputs } = getInputValues();
  if (operation === 'sum') {
    const result = calculator.sum(sumInputs.first, sumInputs.second);
    document.querySelector('#sum-result').innerHTML = result;
  } else if(operation === 'subtract') {
    const result = calculator.subtract(decremInputs.first, decremInputs.second);
    document.querySelector('#subtract-result').innerHTML = result;
  }
}

