/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    const charCount = {};
    
    // Step 1: Count frequencies of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Step 2: Find the first character with a count of 1
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    // Return -1 if no unique character exists
    return -1;
}
