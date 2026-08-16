/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let level = 0
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        let pop = s[i];
        
        if (pop === "(") {
            ++level;
            ans += ((level > 1) ? pop : "");
        }
        else {
            ans += ((level>1) ? pop : "");
            --level;
        }

    }

    return ans;
};