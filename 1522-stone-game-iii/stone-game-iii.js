/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;
    const dp = new Array(n + 3).fill(0);
    
    for (let i = n - 1; i >= 0; i--) {
        let currentSum = 0;
        let bestMove = -Infinity;
        
        for (let k = 0; k < 3 && i + k < n; k++) {
            currentSum += stoneValue[i + k];
            let outcome = currentSum - dp[i + k + 1];
            if (outcome > bestMove) {
                bestMove = outcome;
            }
        }
        dp[i] = bestMove;
    }
    
    const result = dp[0];
    if (result > 0) return "Alice";
    if (result < 0) return "Bob";
    return "Tie";
};