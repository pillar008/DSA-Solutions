/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // XOR finds all bit positions where x and y differ
    let xor = x ^ y;
    let distance = 0;
    
    // Count the number of set bits (1s) in the XOR result
    while (xor > 0) {
        // Increment distance if the lowest bit is 1
        distance += xor & 1;
        // Shift right by 1 bit to check the next position
        xor >>= 1;
    }
    
    return distance;
};