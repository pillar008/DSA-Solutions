/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    bool Check(TreeNode* curr1, TreeNode* curr2 ,vector<int>& ans1,vector<int>& ans2){
        if((curr1 == nullptr && curr2 != nullptr) || (curr1 != nullptr && curr2 == nullptr)) return false;

        if(curr1 == nullptr && curr2 == nullptr) return true;

        // Check(curr1 -> left, curr2 -> left,ans1,ans2);
        if (!Check(curr1->left, curr2->left, ans1, ans2)) return false;
        ans1.push_back(curr1 -> val);
        ans2.push_back(curr2 -> val);
        if(ans1.back() != ans2.back()) return false;

        if (!Check(curr1->right, curr2->right, ans1, ans2)) return false;
        // Check(curr1 -> right, curr2 -> right,ans1,ans2);

        return true;
    }

    bool isSameTree(TreeNode* p, TreeNode* q) {
        vector<int> ans1;
        vector<int> ans2;

        return Check(p, q, ans1, ans2); ;
    }
};