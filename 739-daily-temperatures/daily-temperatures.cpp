class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        vector<int> ans(temperatures.size(), 0);
        vector<int> stack;

        for(int i = temperatures.size()-1;i>=0;i--){
            while(!stack.empty() && temperatures[stack.back()]<=temperatures[i]){
                stack.pop_back();
            }

            if(!stack.empty() && temperatures[stack.back()] >temperatures[i]){
                ans[i] = stack.back() - i;
                stack.push_back(i);
            }
            stack.push_back(i);
        }

        return ans;
    }
};