/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = -Infinity;
    let min = Infinity;
    let n = prices.length;
    
    for(let i = 0;i<n;i++){
        if(prices[i] < min){
            min = prices[i];
        }
        if((prices[i] - min) > max){
            max = prices[i] - min;
        }
    }

    if (max > 0) return max;
    else return 0;
};