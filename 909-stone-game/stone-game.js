/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const n = piles.length;
    const memo = Array.from({ length: n }, () => Array(n).fill(null));
    
    function getPlayerDiff(left, right, isAlice) {
        if (left > right) return 0;
        
        if (memo[left][right] !== null) {
            return memo[left][right];
        }
        
        if (isAlice) {
            const chooseLeft = piles[left] + getPlayerDiff(left + 1, right, false);
            const chooseRight = piles[right] + getPlayerDiff(left, right - 1, false);
            memo[left][right] = Math.max(chooseLeft, chooseRight);
        } else {
            const chooseLeft = -piles[left] + getPlayerDiff(left + 1, right, true);
            const chooseRight = -piles[right] + getPlayerDiff(left, right - 1, true);
            memo[left][right] = Math.min(chooseLeft, chooseRight);
        }
        
        return memo[left][right];
    }
    
    return getPlayerDiff(0, n - 1, true) > 0;
};