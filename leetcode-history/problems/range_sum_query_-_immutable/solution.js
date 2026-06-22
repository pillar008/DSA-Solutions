/**
 * @param {number[]} nums
 */
class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        // Create an array to store running totals
        this.prefixSums = new Array(nums.length + 1).fill(0);
        
        // Fill the prefix sums array
        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i + 1] = this.prefixSums[i] + nums[i];
        }
    }

    /** 
     * @param {number} left 
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        // Use the formula: total up to right minus total before left
        return this.prefixSums[right + 1] - this.prefixSums[left];
    }
}


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */