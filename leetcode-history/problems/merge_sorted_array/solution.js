/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let ptr1 = m - 1;
    let ptr2 = n - 1;
    for(let i=m+n-1;i>=0;i--){
        if(ptr2 < 0){
            break;
        }
        if(ptr1 >= 0 && nums1[ptr1]>nums2[ptr2]){
            nums1[i] = nums1[ptr1];
            ptr1--;
        }
        else{
            nums1[i] = nums2[ptr2];
            ptr2--;
        }
    }
    return nums1;
};