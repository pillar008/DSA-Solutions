/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let last = s.length-1;
    let i = 0;
        while (i < last){
            let temp;
            temp = s[i];
            s[i] = s[last];
            s[last] = temp;
            i++;
            last--;
        }
    return s;
};