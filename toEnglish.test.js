import { toEnglish } from './toEnglish.js';

const invalidCharsError = new Error (`ERROR: Input includes character(s) that don't exist in Morse code.`);

const invalidMorseComboError = new Error (`ERROR: Invalid morse code input. Make sure to check morse code combination and to put spaces in between characters.`);

describe("Test cases for morse code to English translation", () => {
    it("should translate morse code to English given a valid morse code character or combination", () => {
        expect(toEnglish(".")).toBe("e");
        expect(toEnglish("  ....")).toBe("h");
        expect(toEnglish("....     ..")).toBe("hi");
        expect(toEnglish("-- --- .-. ... . / -.-. --- -.. .")).toBe("morse code");
        expect(toEnglish(".... --- .-- .- .-. . -.-- --- ..- ..--..")).toBe("howareyou?");
        expect(toEnglish(".. / .... .- ...- . / .- / .---- -....- -.-- . .- .-. / --- .-.. -.. / -.. .- ..- --. .... - . .-. .-.-.-")).toBe("i have a 1-year old daughter.");
    })
    
    it("should handle multiple spaces in between characters to be a single space", () => {
        expect(toEnglish("....     ..")).toBe("hi");
        expect(toEnglish("...    / ---   / ...")).toBe("s o s");
    })

    it("should trim multiple spaces before the first morse code input", () => {
        expect(toEnglish("  ....")).toBe("h");
    })

    it("should throw an error when user inputs characters other than . /-", ()=> {
        expect(() => {
            toEnglish(".... ?")
        }).toThrow(invalidCharsError);
        expect(() => {
            toEnglish(". / ... |")
        }).toThrow(invalidCharsError);
        expect(() => {
            toEnglish(". : ..")
        }).toThrow(invalidCharsError);
    })

    it("should throw an error when user inputs invalid morse code combination or when no spaces in between morse code characters", ()=> {
        expect(() => {
            toEnglish(".......")
        }).toThrow(invalidMorseComboError);
        expect(() => {
            toEnglish("/../")
        }).toThrow(invalidMorseComboError);
        expect(() => {
            toEnglish("./")
        }).toThrow(invalidMorseComboError);
    })
})
