/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Handle empty needle edge case if required by older problem specs
    if (needle === "") return 0; 
    
    const hLen = haystack.length;
    const nLen = needle.length;
    
    // No need to loop past the point where the remaining characters 
    // are fewer than the needle's length
    for (let i = 0; i <= hLen - nLen; i++) {
        // Check if the substring matches the needle
        if (haystack.substring(i, i + nLen) === needle) {
            return i;
        }
    }
    
    return -1;
};