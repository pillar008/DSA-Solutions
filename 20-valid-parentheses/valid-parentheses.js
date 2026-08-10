/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let i = 0;

    while(i< s.length){
        if(stack[stack.length-1] === "(" && s[i] ===")"){
            stack.pop();
            i++;
        }
        else if(stack[stack.length-1] === "{" && s[i] ==="}"){
            stack.pop();
            i++;
        }
        else if(stack[stack.length-1] === "[" && s[i] ==="]"){
            stack.pop();
            i++;
        }
        else{
            stack.push(s[i]);
            i++;
        }
    }

    return stack.length === 0;
};