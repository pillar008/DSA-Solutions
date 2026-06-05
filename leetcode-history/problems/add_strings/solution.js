/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;

    // Loop from right to left until both strings are processed and no carry remains
    while (i >= 0 || j >= 0 || carry > 0) {
        // Convert characters to digits by subtracting ASCII code of '0'
        let digit1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0;
        let digit2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0;

        // Calculate sum of current columns and previous carry
        let currentSum = digit1 + digit2 + carry;
        
        // Update carry for the next position
        carry = Math.floor(currentSum / 10);
        
        // Push the single digit result
        result.push(currentSum % 10);

        // Move pointers to the left
        i--;
        j--;
    }

    // Reverse the array and join into a single string
    return result.reverse().join('');
};
