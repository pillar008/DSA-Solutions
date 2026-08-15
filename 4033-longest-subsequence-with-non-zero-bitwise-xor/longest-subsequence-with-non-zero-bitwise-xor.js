/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let totalXor = 0;
    let hasNonZero = false;

    for (let i = 0; i < nums.length; i++) {
        totalXor ^= nums[i];
        if (nums[i] !== 0) {
            hasNonZero = true;
        }
    }

    if (!hasNonZero) {
        return 0;
    }

    if (totalXor !== 0) {
        return nums.length;
    }

    return nums.length - 1;
};