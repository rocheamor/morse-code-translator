import { toMorse } from './toMorse.js';

const noMorseTranslationError = new Error (`ERROR: Input includes character(s) that don't have a corresponding Morse code translation.`);

describe("Test cases for English to morse code translation", () => {
    it("should translate English to morse code given an input with corresponding Morse code translation ", () => {
        expect(toMorse("e")).toBe(".");
        expect(toMorse("?")).toBe("..--..");
        expect(toMorse("hi")).toBe(".... ..");

        expect(toMorse("how are you?")).toBe(".... --- .-- / .- .-. . / -.-- --- ..- ..--..");
        expect(toMorse("I'm happy!")).toBe(".. .----. -- / .... .- .--. .--. -.-- -.-.--");
    })

    it("should handle multiple spaces in between characters to be a single space", () => {
        expect(toMorse("h   i")).toBe(".... / ..");
        expect(toMorse("read     me  ")).toBe(".-. . .- -.. / -- . /");
    })

    it("should translate uppercase and lowercase letters the same way", () => {
        expect(toMorse("Morse Code")).toBe("-- --- .-. ... . / -.-. --- -.. .");
        expect(toMorse("HELLO!")).toBe(".... . .-.. .-.. --- -.-.--");
    })

    it("should throw an error when user inputs characters that don't have a morse code translation", ()=> {
        expect(() => {
            toMorse("~")
        }).toThrow(noMorseTranslationError);
        expect(() => {
            toMorse("25%")
        }).toThrow(noMorseTranslationError);
        expect(() => {
            toMorse("asterisk*")
        }).toThrow(noMorseTranslationError);
    })
})