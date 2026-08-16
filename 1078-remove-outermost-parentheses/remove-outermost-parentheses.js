/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let ans = [];
    let length = s.length;

    for (let i = 0; i < length; i++) {
        let pop = s[i];

        if (pop === "(") {
            if (stack.length >= 1) {
                ans.push(pop);
            }
            stack.push(pop);
        }
        else {
            stack.pop();
            if (stack.length >= 1) {
                ans.push(s[i]);
            }
        }

    }

    return ans.join("");
};