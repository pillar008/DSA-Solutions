/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const n = nums.length;
    if (n <= 2) return n;

    let minIdx = 0;
    let maxIdx = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[minIdx]) minIdx = i;
        if (nums[i] > nums[maxIdx]) maxIdx = i;
    }

    let left = Math.min(minIdx, maxIdx);
    let right = Math.max(minIdx, maxIdx);

    const option1 = right + 1;
    const option2 = n - left;
    const option3 = (left + 1) + (n - right);

    return Math.min(option1, option2, option3);
};