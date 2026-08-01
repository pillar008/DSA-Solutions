/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    let n = nums.length;
    if(n == 1) return true; // quick edge case check
    
    // dp array to track max diff
    let dp = new Array(n).fill(0);
    for(let i=0; i<n; i++) {
        dp[i] = nums[i];
    }

    // bottom up dp loop
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            let pick_left = nums[i] - dp[j];
            let pick_right = nums[j] - dp[j-1];
            
            dp[j] = Math.max(pick_left, pick_right);
        }
    }
    
    return dp[n-1] >= 0;
};
