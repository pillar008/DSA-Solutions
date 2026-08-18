class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        vector<int> ans;

        for (int i : nums1) {
            bool found = false;
            bool flag = false;
            for (int j : nums2) {
                if (i == j) {
                    found = true;
                }
                if (found == true && j > i) {
                    ans.push_back(j);
                    flag = true;
                    break;
                }
            }
            if(found == true && flag == false){
                ans.push_back(-1);
            }
        }
    return ans;
    }
};