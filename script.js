import {toMorse} from './toMorse.js';
import {toEnglish} from './toEnglish.js';

const englishTextArea = document.querySelector('#englishTextArea');
const morseTextArea = document.querySelector('#morseTextArea');
const englishErrorPara = document.querySelector('#english-error')
const morseErrorPara = document.querySelector('#morse-error')

const clearError = (errorElement) => errorElement.textContent = '';
const displayError = (message, errorElement) => errorElement.textContent = message;
  

englishTextArea.addEventListener('input', function(event) {
  clearError(englishErrorPara);

  const text = event.target.value;
  
  try {
    const morseTranslation = toMorse(text);
    morseTextArea.value = morseTranslation;
  } 
  catch (error) {
    displayError(error.message, englishErrorPara); 
  }
});


morseTextArea.addEventListener('input', function(event) {
    clearError(morseErrorPara);

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
        displayError(error.message, morseErrorPara);
    }
});