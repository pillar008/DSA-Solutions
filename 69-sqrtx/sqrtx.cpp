class Solution {
public:
    int mySqrt(long long x) {
        if(x<=1){
            return x;
        }
        for(long long i=1;i<x;i++){
            
            if(i*i>x){
                return i-1;
            }
        }
        return 1;
    }
};