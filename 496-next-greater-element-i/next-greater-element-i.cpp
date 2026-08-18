#include <unordered_map>

class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> NGE;
        vector<int> stack;
        vector<int> ans;

        for (int i = nums2.size() - 1; i >= 0; i--) {
            while (!stack.empty() && stack.back() <= nums2[i]) {
                stack.pop_back();
            }
            if (!stack.empty() && nums2[i] < stack.back()) {
                NGE[nums2[i]] = stack.back();
            } else {
                NGE[nums2[i]] = -1;
            }
            stack.push_back(nums2[i]);
        }
        for (int i : nums1) {
            if (NGE.contains(i)) {
                ans.push_back(NGE[i]);
            }
        }
        return ans;
    }
};