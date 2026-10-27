class Solution {
public:
    int fn(int remAmount,int n,vector<int>& coins,unordered_map<int,int>& memo){
            if(remAmount==0) return 0;
            if(remAmount < 0) return -1;

            if(memo.contains(remAmount)) return memo[remAmount];

            int minCoin = 1e9;

            for(int i = 0; i<n; i++){
                int result = fn(remAmount - coins[i],n,coins,memo);
 
                if(result != -1){
                    minCoin = min(minCoin,1+result);
                }
            }

            memo.insert_or_assign(remAmount, minCoin == 1e9 ? -1 : minCoin);
            return memo[remAmount];
        }

    int coinChange(vector<int>& coins, int amount) {
        int n = coins.size();

        unordered_map<int,int> memo;
        
        return fn(amount,n,coins,memo);
    }
};