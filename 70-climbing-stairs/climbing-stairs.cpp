class Solution {
public:
    unordered_map<int,int> dp;
    int climbStairs(int n) {
        if(n<=3) return n;

        if(dp.count(n)==0){
            dp[n] = climbStairs(n-1) + climbStairs(n-2);
        }    
        return dp[n];
    }
};