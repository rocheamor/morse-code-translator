import {englishObject} from './morse-english-objects.js';


export const toEnglish = (morseCode) => {
    const trimmedCode = morseCode.trim();
    const oneSpacePerChar = trimmedCode.replace(/\s\s+/g, ' '); 

    if(/[^./ -]/.test(oneSpacePerChar))
        throw new Error (`ERROR: Input includes character(s) that don't exist in Morse code.`);

    const arrayOfCodes = oneSpacePerChar.split(" ");

    if(arrayOfCodes.every(code => 
        englishObject[code]) === false && trimmedCode !== "")
        throw new Error (`ERROR: Invalid morse code input. Make sure to check morse code combination and to put spaces in between characters.`);

    return arrayOfCodes.map(code => englishObject[code]).join("");

}

