/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let n = 0;
    for(let i = num.length-1;i>=0;--i){
        if(num[i] %2 !=0){
            n=i+1;
            break;
        }
    }
    return num.slice(0,n);
};