class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n = nums.size();
        vector<int> stack;
        vector<int> ans(n, -1);

        for (int i = 2 * n - 1; i >= 0; i--) {
            int real_index = i % n;

            while (!stack.empty() && stack.back() <= nums[real_index]) {
                stack.pop_back();
            }
            if (i<n && !stack.empty()) {
                ans[real_index] = stack.back();
            }
            stack.push_back(nums[real_index]);
        }
        return ans;
    }
};