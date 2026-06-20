/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const n = score.length;
    const result = new Array(n);
    
    // Create an array of objects containing the score and its original index
    const scoreWithIndex = score.map((val, idx) => ({ val, idx }));
    
    // Sort the array in descending order based on the scores
    scoreWithIndex.sort((a, b) => b.val - a.val);
    
    // Assign ranks based on the sorted positions
    for (let i = 0; i < n; i++) {
        const originalIndex = scoreWithIndex[i].idx;
        
        if (i === 0) {
            result[originalIndex] = "Gold Medal";
        } else if (i === 1) {
            result[originalIndex] = "Silver Medal";
        } else if (i === 2) {
            result[originalIndex] = "Bronze Medal";
        } else {
            result[originalIndex] = (i + 1).toString();
        }
    }
    
    return result;
};
