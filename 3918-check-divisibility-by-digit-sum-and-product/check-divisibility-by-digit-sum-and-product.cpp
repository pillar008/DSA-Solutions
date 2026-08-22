class Solution {
public:
    bool checkDivisibility(int n) {
        int sum = 0;
        int product = 1;
        int num = n;

        while(num != 0){
            int temp = num %10;
            sum += temp;
            product *= temp;
            num /= 10;
        }

        int result_sum = sum + product;

        if(n % result_sum == 0 ){
            return true;
        }

        return false;
    }
};