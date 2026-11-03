class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int left_prod = 1;
        int right_prod = 1;
        int n = nums.size();

        int final_max = -INT_MAX;

        for (int i = 0; i < n; i++) {
            left_prod = left_prod * nums[i];
            final_max = max(final_max, left_prod);
            if (left_prod == 0)
                left_prod = 1;
        }

        for (int i = n-1; i >= 0; i--) {
            right_prod = right_prod * nums[i];
            final_max = max(final_max, right_prod);
            if (right_prod == 0)
                right_prod = 1;
        }

        return final_max;
    }
};