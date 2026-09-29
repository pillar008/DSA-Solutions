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
        vector<TreeNode*> stack;
        TreeNode* curr = root;
        vector<int> ans;
        TreeNode* lastVisited = nullptr;

        if(root == nullptr) return ans;

        while(stack.empty() == false || curr != nullptr){
            while(curr != nullptr){
                stack.push_back(curr);
                curr = curr->left;
            }
            TreeNode* peekNode = stack.back();

            if(peekNode -> right != nullptr && peekNode -> right != lastVisited){
                curr = peekNode->right;
            }
            else{
                ans.push_back(peekNode -> val);
                lastVisited = peekNode;
                stack.pop_back();
            }
        }
        return ans;
    }
};