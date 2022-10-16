import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { notANumber, IMC } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// === === === functions === === === //
form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNAN = notANumber(weight) || notANumber(height);

  if(weightOrHeightIsNAN) {
    console.log('Mostrar o alerta de erro');
    return AlertError.open();
  }

  AlertError.close();

  const result = IMC(weight, height);
  displayResultMessage(result);
}

function displayResultMessage(result) {
  const message = `Seu IMC e de: ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
