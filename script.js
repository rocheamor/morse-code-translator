import {toMorse} from './toMorse.js';
import {toEnglish} from './toEnglish.js';

const englishTextArea = document.querySelector('#englishTextArea');
const morseTextArea = document.querySelector('#morseTextArea');
const englishError = document.querySelector('#english-error')
const morseError = document.querySelector('#morse-error')

const clearErrorEnglish = () => englishError.textContent = '';
const displayErrorEnglish = (message) => englishError.textContent = message;
const clearErrorMorse = () => morseError.textContent = '';
const displayErrorMorse = (message) => morseError.textContent = message;
  

englishTextArea.addEventListener('input', function(event) {

  clearErrorEnglish();
  const text = event.target.value;
  
  try {
    const morseTranslation = toMorse(text);
    morseTextArea.value = morseTranslation;
  } 
  catch (error) {
    displayErrorEnglish(error.message); 
  }
});


morseTextArea.addEventListener('input', function(event) {
    clearErrorMorse();
    const text = event.target.value;
    try {
        if(text !== '') {
        const englishTranslation = toEnglish(text.trimRight());
        englishTextArea.value = englishTranslation; 
        } else {
          englishTextArea.value = "";
        }
    } 
    catch (error) {
        displayErrorMorse(error.message)
    }
});