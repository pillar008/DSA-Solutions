/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let n = words.length - 1;
    let result = [];
    for(let i = 0;i<=n;i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }
    return result;
};