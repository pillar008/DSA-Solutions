/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const map = new Map();
    
    for (const [row, seat] of reservedSeats) {
        if (seat >= 2 && seat <= 9) {
            if (!map.has(row)) {
                map.set(row, 0);
            }
            map.set(row, map.get(row) | (1 << (seat - 2)));
        }
    }
    
    let maxGroups = (n - map.size) * 2;
    
    const leftMask = 0b11110000;  
    const middleMask = 0b00111100;
    const rightMask = 0b00001111; 
    
    for (const mask of map.values()) {
        let leftAllocated = false;
        let rightAllocated = false;
        
        if ((mask & leftMask) === 0) {
            maxGroups++;
            leftAllocated = true;
        }
        
        if ((mask & rightMask) === 0) {
            maxGroups++;
            rightAllocated = true;
        }
        
        if (!leftAllocated && !rightAllocated && (mask & middleMask) === 0) {
            maxGroups++;
        }
    }
    
    return maxGroups;
};