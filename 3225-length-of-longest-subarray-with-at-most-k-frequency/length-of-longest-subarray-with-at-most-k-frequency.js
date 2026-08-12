/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let counts = {};
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        let rightNum = nums[right];
        counts[rightNum] = (counts[rightNum] || 0) + 1;

        while (counts[rightNum] > k) {
            let leftNum = nums[left];
            counts[leftNum]--;
            if (counts[leftNum] === 0) {
                delete counts[leftNum];
            }
            left++;
        }

        let currentLength = right - left + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
};
