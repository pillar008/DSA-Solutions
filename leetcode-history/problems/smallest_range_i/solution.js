/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    
    return Math.max(0, maxVal - minVal - 2 * k);
};