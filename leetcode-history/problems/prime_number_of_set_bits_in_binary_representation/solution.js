/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    // Primes possible for 32-bit integer set bits
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
    let count = 0;
    
    for (let i = left; i <= right; i++) {
        // Count set bits using Brian Kernighan's Algorithm
        let bits = 0;
        let num = i;
        while (num > 0) {
            num &= (num - 1);
            bits++;
        }
        
        // Check if the bit count is prime
        if (primes.has(bits)) {
            count++;
        }
    }
    
    return count;
};
