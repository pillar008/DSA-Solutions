/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // Helper function to calculate the sum of the squares of digits
    const getNext = (num) => {
        let totalSum = 0;
        while (num > 0) {
            let digit = num % 10;
            totalSum += digit * digit;
            num = Math.floor(num / 10);
        }
        return totalSum;
    };

    let tortoise = n;
    let hare = getNext(n);

    // Loop until hare reaches 1 or meet tortoise (detects a cycle)
    while (hare !== 1 && tortoise !== hare) {
        tortoise = getNext(tortoise);       // Moves 1 step
        hare = getNext(getNext(hare));     // Moves 2 steps
    }

    return hare === 1;
};
