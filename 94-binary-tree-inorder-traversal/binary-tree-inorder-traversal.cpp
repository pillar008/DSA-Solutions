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
    vector<int> inorderTraversal(TreeNode* root) {
        vector <int> ans;
        vector <TreeNode*> node_stack;
        TreeNode* curr = root;


        while(curr != nullptr || !node_stack.empty()){
            while(curr != nullptr){
                node_stack.push_back(curr);
                curr = curr->left;
            }
            curr = node_stack.back();
            node_stack.pop_back();
            ans.push_back(curr->val);
            curr = curr->right;
        }
        return ans;
    }
};