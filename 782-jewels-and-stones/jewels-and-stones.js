/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jlen = jewels.length;
    let slen = stones.length;
    let count = 0;
    for(let i = 0;i<jlen;i++){
        for(let j = 0;j<slen;j++){
            if(jewels[i] === stones[j]){
                count++;
            }
        }
    }
    return count;
};