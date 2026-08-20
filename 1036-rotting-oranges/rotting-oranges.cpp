#include <queue>

class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
    queue<tuple<int,int, int>> myQueue;
    int m = grid.size();
    int n = grid[0].size();

    for(int i = 0;i<m;i++){
        for(int j = 0;j<n;j++){
            if(grid[i][j] == 2){
                myQueue.push({i,j,0});
            }
        }
    }

    int maxMinutes = 0;
    while(!myQueue.empty()){
        auto [x,y,level] = myQueue.front();
        myQueue.pop();

        if(x>0 && grid[x-1][y] == 1){
            grid[x-1][y] = 2;
            myQueue.push({x-1,y,level+1});
        }
        if(x+1<m && grid[x+1][y] == 1){
            grid[x+1][y] = 2;
            myQueue.push({x+1,y,level+1});
        }
        if(y>0 && grid[x][y-1] == 1){
            grid[x][y-1] = 2;
            myQueue.push({x,y-1,level+1});
        }
        if(y+1<n && grid[x][y+1] == 1){
            grid[x][y+1] = 2;
            myQueue.push({x,y+1,level+1});
        }
        maxMinutes = max(level,maxMinutes);
    }

    for(int i = 0;i<m;i++){
        for(int j = 0;j<n;j++){
            if(grid[i][j] == 1){
                return -1;
            }
        }
    }

    return maxMinutes;
    }
};