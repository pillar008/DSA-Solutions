/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const cache = Array.from({ length: n }, () => ({}));
    
    const suffixSums = new Array(n).fill(0);
    suffixSums[n - 1] = piles[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSums[i] = piles[i] + suffixSums[i + 1];
    }

    function maxStones(i, M) {
        if (i >= n) return 0;
        if (i + 2 * M >= n) return suffixSums[i];
        if (cache[i][M] !== undefined) return cache[i][M];

        let minOpponentStones = Infinity;

        for (let X = 1; X <= 2 * M; X++) {
            const nextM = Math.max(M, X);
            const opponentStones = maxStones(i + X, nextM);
            minOpponentStones = Math.min(minOpponentStones, opponentStones);
        }

        cache[i][M] = suffixSums[i] - minOpponentStones;
        return cache[i][M];
    }

    return maxStones(0, 1);
};