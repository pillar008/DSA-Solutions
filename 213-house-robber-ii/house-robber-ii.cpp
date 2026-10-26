class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();

        if(n == 1) return nums[0];

        int first=0,second=0,max1=0,max2=0;

        for(int i=0;i<=n-2;i++){
            int temp_first = first;
            first = second;
            second = max (second,temp_first + nums[i]);
        }
        max1 = max(first,second);
        first=0,second=0;
    
        for(int i=1;i<=n-1;i++){
            int temp_first = first;
            first = second;
            second = max (second,temp_first + nums[i]);
        }
        max2 = max(first,second);

        return max(max1,max2);
    }

};