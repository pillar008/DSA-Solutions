class Solution {
public:
    unordered_map<string, int> dp;
    int func(string remS) {

        int ans = 0;
        int n = remS.size();
        if (remS == "")
            return 1;
        if (remS == "0")
            return 0;
        if (dp.contains(remS))
            return dp[remS];

        string oneDigit = remS.substr(n - 1);

        if (n >= 2) {
            string twoDigit = remS.substr(n - 2);

            if (stoi(twoDigit) >= 10 && stoi(twoDigit) <= 26) {
                ans += func(remS.substr(0, n - 2));
            }
        }

        if (stoi(oneDigit) != 0) {
            ans += func(remS.substr(0, n - 1));
        }

        dp[remS] = ans;
        return ans;
    }

    int numDecodings(string s) { return func(s); }
};