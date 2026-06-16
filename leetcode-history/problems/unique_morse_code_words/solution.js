/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    // Morse code mapping for letters 'a' through 'z'
    const morseMapping = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
        ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", 
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."
    ];
    
    const uniqueTransformations = new Set();
    
    for (const word of words) {
        let morseWord = "";
        for (let i = 0; i < word.length; i++) {
            // Find the alphabet index (0 for 'a', 1 for 'b', etc.)
            const index = word.charCodeAt(i) - 97; 
            morseWord += morseMapping[index];
        }
        // Duplicate transformations will automatically be ignored by the Set
        uniqueTransformations.add(morseWord);
    }
    
    return uniqueTransformations.size;
};
