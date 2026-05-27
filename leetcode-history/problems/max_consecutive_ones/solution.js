/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max1 = 0;
    let max2 = 0;
    let n = nums.length;
    
    for(let i = 0; i<n;i++){
        if(nums[i] == 1){
            max1++;
        }
        else{
            if(max1 > max2){
                max2 = max1;
            }
            max1 = 0;
        }
    }
    if(max1>max2){
        max2 = max1;
    }
    return max2;
};