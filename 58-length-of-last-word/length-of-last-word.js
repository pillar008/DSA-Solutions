/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let len = 0;
    if(n === 1){
        return 1;
    }
    while(n>= 0 && s[n] === " "){
        n--;
    }
    while(n >= 0 && s[n] != " "){
        len++;
        n--;
    }
    return len;
};