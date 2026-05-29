/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n===1) return true;
    else if(n>1) return isPowerOfTwo(n/2);
    else return false;
};