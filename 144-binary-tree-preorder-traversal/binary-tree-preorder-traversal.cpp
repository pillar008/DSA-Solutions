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
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> ans;
        vector<TreeNode*> node_stack;

        node_stack.push_back(root);

        while(!node_stack.empty()){
            TreeNode* curr = node_stack.back();
            node_stack.pop_back();

            if(curr == nullptr) continue;

            ans.push_back(curr->val);

            node_stack.push_back(curr->right);

            node_stack.push_back(curr->left);
        }

        return ans;
    }
};