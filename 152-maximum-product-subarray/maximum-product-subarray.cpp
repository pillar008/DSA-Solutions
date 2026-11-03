class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n = nums.size();
        int maxPro = nums[0];
        int minPro = nums[0];
        int maximum = nums[0];

        for (int i = 1; i < n; i++) {
            int curr = nums[i];

            int temp_min = minPro;
            int temp_max = maxPro;
            

            minPro = min({curr, temp_min*curr, temp_max*curr});
            maxPro = max({curr, temp_min*curr, temp_max*curr});

            maximum = max(maximum,maxPro);
        }

        return maximum;
    } 
};