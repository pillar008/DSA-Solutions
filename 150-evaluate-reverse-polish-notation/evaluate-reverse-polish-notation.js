/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const map = {
        "+" : (a,b) => (b+a),
        "*" : (a,b) => (b*a),
        "/" : (a,b) => Math.trunc(b/a),
        "-" : (a,b) => (b-a),
    };

    for(let i = 0;i<tokens.length;i++){
        if(map[tokens[i]]){
            let var1= stack.pop();
            let var2= stack.pop();
            let result = map[tokens[i]](+var1,+var2);
            stack.push(result);
        }
        else{
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
};