/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsStore = new Set(jewels);
    let count = 0;

    for(let i = 0;i<stones.length;i++){
        if(jewelsStore.has(stones[i])){
            count++;
        }
    }

    return count;
};