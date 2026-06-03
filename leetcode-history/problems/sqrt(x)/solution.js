/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    
    let left = 1;
    let right = Math.floor(x / 2);
    let ans = 0;
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let num = mid * mid;
        
        if (num === x) {
            return mid;
        } else if (num < x) {
            ans = mid; 
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return ans;
};
