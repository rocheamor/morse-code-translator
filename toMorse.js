import {morseObject} from './morse-english-objects.js';

export const toMorse = (word) => {
    const oneSpacePerWord = word.replace(/\s\s+/g, ' ');
    const arrayOfLetters = oneSpacePerWord.toLowerCase().split('');

    if(arrayOfLetters.every(letter => 
        morseObject[letter])=== false)
        throw new Error (`ERROR: Input includes character(s) that don't have a corresponding Morse code translation.`);

    return arrayOfLetters.map((letter) => {
        return morseObject[letter]}).join(" ")};

