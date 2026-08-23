/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    let n = num.length;
    let sum1 = 0, q1 = 0;
    let sum2 = 0, q2 = 0;
    
    for (let i = 0; i < n / 2; i++) {
        if (num[i] === '?') {
            q1++;
        } else {
            sum1 += num[i] - '0';
        }
    }
    
    for (let i = n / 2; i < n; i++) {
        if (num[i] === '?') {
            q2++;
        } else {
            sum2 += num[i] - '0';
        }
    }
    
    return (sum1 - sum2) !== (q2 - q1) * 4.5;
};