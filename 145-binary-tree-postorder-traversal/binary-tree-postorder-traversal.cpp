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
    vector<int> postorderTraversal(TreeNode* root) {
        vector<TreeNode*> s1;
        vector<TreeNode*> s2;
        vector<int> ans;

        if(root==nullptr) return ans;

        s1.push_back(root);

        while(s1.empty() == false){
            TreeNode* curr = s1.back();
            s1.pop_back();
            s2.push_back(curr);

            if(curr->left != nullptr) s1.push_back(curr->left);

            if(curr->right != nullptr) s1.push_back(curr->right);
        }

        while(s2.empty() == false){
            ans.push_back(s2.back()->val);
            s2.pop_back();
        }
        return ans;
    }
};