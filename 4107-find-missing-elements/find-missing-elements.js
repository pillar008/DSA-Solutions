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

    let idx = 0;
    let arr = [];
    for(let i = min;i<=max;i++){
        arr[idx] = i;
        idx++;
    }

    arr = arr.filter(item => !nums.includes(item));

    return arr;
};