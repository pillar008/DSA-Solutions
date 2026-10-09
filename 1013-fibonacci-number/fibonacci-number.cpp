class Solution {
public:
    unordered_map<int,int> store;
    int fib(int n) {
        if(n<=1) return n;

        if(store.count(n)==0){
            store[n] = fib(n-1)+fib(n-2);
        }

        return store[n];
    }
};