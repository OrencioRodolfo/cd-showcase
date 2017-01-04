import style from './../style.css';
import * as calculator from './calculator.js';

function getInputValues() {
  return {
    sumInputs: {
      first: parseFloat(document.querySelector('#sum-first').value),
      second: parseFloat(document.querySelector('#sum-second').value),
    },
    decremInputs: {
      first: parseFloat(document.querySelector('#decrem-first').value),
      second: parseFloat(document.querySelector('#decrem-second').value),
    }
  };
}

window.calc = function calc(operation) {
  const { sumInputs, decremInputs } = getInputValues();
  if (operation === 'sum') {
    const result = calculator.sum(sumInputs.first, sumInputs.second);
    document.querySelector('#sum-result').innerHTML = result;
  } else if(operation === 'decrement') {
    const result = calculator.decrement(decremInputs.first, decremInputs.second);
    document.querySelector('#decrement-result').innerHTML = result;
  }
}

