class Solution {
public:
    int mySqrt(int x) {
        if (x < 2) {
            return x;
        }

        int low = 2;
        int high = x / 2;

        while (low <= high) {
            long long mid = (low + high) / 2;
            if (x == (mid * mid)) {
                return mid;
            } else if (x < (mid * mid)) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return high;
    }
};