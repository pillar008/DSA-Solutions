/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";
    
    const hexChars = "0123456789abcdef";
    let result = "";
    
    // Treat num as an unsigned 32-bit integer using Logical Right Shift (>>>)
    let unsignedNum = num >>> 0;
    
    while (unsignedNum > 0) {
        let remainder = unsignedNum % 16;
        result = hexChars[remainder] + result;
        unsignedNum = Math.floor(unsignedNum / 16);
    }
    
    return result;
};
