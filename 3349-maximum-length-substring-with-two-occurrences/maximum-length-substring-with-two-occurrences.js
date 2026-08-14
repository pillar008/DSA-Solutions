/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let maxLen = 0;
    let left = 0;
    const counts = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        counts[char] = (counts[char] || 0) + 1;

        while (counts[char] > 2) {
            counts[s[left]]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
