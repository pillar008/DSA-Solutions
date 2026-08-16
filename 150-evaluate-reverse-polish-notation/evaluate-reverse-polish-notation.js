/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let mySet = new Set(["+","*","/","-"]);

    for(let i = 0;i<tokens.length;i++){
        if(mySet.has(tokens[i])){
            let var1= stack.pop();
            let var2= stack.pop();
            let result = new Function(`return ${var2} ${tokens[i]} ${var1}`)();
            stack.push(Math.trunc(result));
        }
        else{
            stack.push(Number(tokens[i]));
        }
    }
    return stack[0];
};