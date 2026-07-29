/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;
    let flag = 0;
    while(n>=0){
        if(flag === 1 && s[n] === " "){
            return count;
        }
        else if(s[n] === " "){
            n--;
        }
        else{
            count++;
            n--;
            flag = 1;
        }
    }
    return count;
};