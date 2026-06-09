/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 1) return false;
    
    let left = 1;
    let right = num;
    
    while (left <= right) {
        // Math.floor handles integer division in JavaScript
        let mid = left + Math.floor((right - left) / 2);
        let square = mid * mid;
        
        if (square === num) {
            return true;
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};
