/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = nums[0];
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]-1){
            sum += nums[i+1];
        }
        else{
            break;
        }
    }
    while(true){
        if(nums.includes(sum)){
            sum++;
        }
        else{
            break;
        }
    }

    return sum;
};