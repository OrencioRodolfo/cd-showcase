import style from './../style.css';
import * as calculator from './calculator.js';

function getInputValues() {
  return {
    sumInputs: {
      first: parseFloat(document.querySelector('#sum-first').value),
      second: parseFloat(document.querySelector('#sum-second').value),
    },
    subtractInputs: {
      first: parseFloat(document.querySelector('#subtract-first').value),
      second: parseFloat(document.querySelector('#subtract-second').value),
    },
    divideInputs: {
      first: parseFloat(document.querySelector('#divide-first').value),
      second: parseFloat(document.querySelector('#divide-second').value),
    }
  };
}

window.calc = function calc(operation) {
  const { sumInputs, subtractInputs, divideInputs } = getInputValues();
  let result;
  let element;

  switch(operation) {
    case 'sum':
      result = calculator.sum(sumInputs.first, sumInputs.second);
      element = '#sum-result';
      document.querySelector('#sum-result').innerHTML = result;
      break;
    case 'subtract':
      result = calculator.subtract(subtractInputs.first, subtractInputs.second);
      element = '#subtract-result';
      break;
    case 'divide':
      result = calculator.divide(divideInputs.first, divideInputs.second);
      element = '#divide-result';
      break;
    default:
     throw new Error('Must specify the operation');
     return;
  }

  document.querySelector(element).innerHTML = result;
}

