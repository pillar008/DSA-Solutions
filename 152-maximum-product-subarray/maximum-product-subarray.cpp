class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxPro = nums[0];
        int minPro = nums[0];
        int totalMax = nums[0];

        for(int i = 1 ; i < nums.size();i++){
            int curr = nums[i];

            int temp_max = maxPro;

            maxPro = max({curr,maxPro * curr,minPro * curr});
            minPro = min({curr,temp_max * curr,minPro * curr});

            totalMax = max(totalMax,maxPro);
        }

        return totalMax;
    }
};