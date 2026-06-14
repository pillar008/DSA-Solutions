/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    
    return result;
};

function isSelfDividing(num) {
    let temp = num;
    
    while (temp > 0) {
        const digit = temp % 10;
        
        // Rule 1: Cannot contain the digit 0
        // Rule 2: Must be divisible by the digit
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
        
        temp = Math.floor(temp / 10);
    }
    
    return true;
}