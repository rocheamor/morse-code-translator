import {morseObject} from './morse-english-objects.js';

export const toMorse = (word) => {
    const oneSpacePerWord = word.replace(/\s\s+/g, ' ');
    const arrayOfLetters = oneSpacePerWord.toLowerCase().split('');

    if(arrayOfLetters.every(letter => 
        morseObject[letter])=== false)
        throw new Error (`ERROR: Input includes characters that don't exist in Morse code.`);

    return arrayOfLetters.map((letter) => {
        return morseObject[letter]}).join(" ")};

