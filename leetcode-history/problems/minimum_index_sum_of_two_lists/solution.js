/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    let minSum = Infinity;
    let result = [];

    // Step 1: Map all items from list1 to their indices
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    // Step 2: Compare with list2 and track the minimum index sum
    for (let j = 0; j < list2.length; j++) {
        const word = list2[j];
        
        if (map.has(word)) {
            const i = map.get(word);
            const sum = i + j;

            if (sum < minSum) {
                minSum = sum;
                result = [word]; // Found a lower sum, reset the array
            } else if (sum === minSum) {
                result.push(word); // Found an equal sum, add to the array
            }
        }
    }

    return result;
};
