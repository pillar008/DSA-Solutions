/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let rc = 0;
    let lc = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i]==="R"){
            rc++;
        }
        else{
            lc++;
        }
        if(rc === lc){
            count++
        }
    }
    return count;
};