/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let mask = 1;
    
    // Create a mask of all 1s with the same bit length as num
    while (mask < num) {
        mask = (mask << 1) | 1;
    }
    
    // XORing num with the mask flips all its bits
    return num ^ mask;
};
