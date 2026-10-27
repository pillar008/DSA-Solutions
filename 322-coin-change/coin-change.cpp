class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int n = coins.size();

        vector<int> dp(amount+1,1e9);

        dp[0] = 0;

        for(int rem = 1; rem <= amount;rem++){
            for(int j = 0;j<n;j++){
                if(rem-coins[j] >= 0){
                    dp[rem] = min(dp[rem],1+dp[rem-coins[j]]);
                }
            }
        }

        return dp[amount] == 1e9 ? -1 : dp[amount];
    }
};