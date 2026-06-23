/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines = 1;
    let currentWidth = 0;

    for (let i = 0; i < s.length; i++) {
        // Get the pixel width of the current character
        const charWidth = widths[s.charCodeAt(i) - 97];

        // Check if adding this character exceeds the 100-pixel limit
        if (currentWidth + charWidth > 100) {
            lines++;            // Move to a new line
            currentWidth = charWidth; // Start the new line with this character
        } else {
            currentWidth += charWidth; // Add character to the current line
        }
    }

    return [lines, currentWidth];
};
