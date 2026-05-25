/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 //[2,1,2,2,3,0,4,2]
var removeElement = function(nums, val) {
    let pole1 = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] != val){
            nums[pole1] = nums[i];
            pole1=pole1+1;
        }
    }
    return (pole1);
};