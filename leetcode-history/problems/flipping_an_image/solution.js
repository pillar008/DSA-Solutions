/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const n = image.length;
    
    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = n - 1;
        
        while (left <= right) {
            if (left === right) {
                // Middle element in an odd-length row: just invert it
                image[i][left] = image[i][left] ^ 1;
            } else if (image[i][left] === image[i][right]) {
                // If elements are the same, they switch places when flipped,
                // so they both need to be inverted.
                // If they are different, flipping and inverting leaves them unchanged.
                image[i][left] = image[i][left] ^ 1;
                image[i][right] = image[i][right] ^ 1;
            }
            left++;
            right--;
        }
    }
    
    return image;
};
