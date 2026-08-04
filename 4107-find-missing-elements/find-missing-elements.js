/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = +Infinity;
    let max = -Infinity;

    for(let i = 0;i<nums.length;i++){
        if(nums[i] > max){
            max = nums[i];
        }
        if(nums[i] < min){
            min = nums[i];
        }
    }

    const numSet = new Set(nums);

    let arr = [];
    for(let i = min;i<=max;i++){
        arr.push(i);
    }

    arr = arr.filter(item => !numSet.has(item));

    return arr;
};