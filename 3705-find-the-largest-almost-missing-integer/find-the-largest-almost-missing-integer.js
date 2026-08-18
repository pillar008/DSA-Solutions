/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const counts = new Map();
    const n = nums.length;

    for (let i = 0; i <= n - k; i++) {
        const uniqueInSubarray = new Set();
        for (let j = i; j < i + k; j++) {
            uniqueInSubarray.add(nums[j]);
        }
        for (const num of uniqueInSubarray) {
            counts.set(num, (counts.get(num) || 0) + 1);
        }
    }

    let maxVal = -1;
    for (const [num, count] of counts.entries()) {
        if (count === 1) {
            if (num > maxVal) {
                maxVal = num;
            }
        }
    }

    return maxVal;
};