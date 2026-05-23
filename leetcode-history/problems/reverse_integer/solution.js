/**
 * @param {number} x
 * @return {number}
 */



var reverse = function(x) {
    let rev = 0;
    let numCopy = x;
    let limit = Math.pow(2,31);
    num = Math.abs(numCopy);

    while(num > 0){
        let slice = num % 10;
        rev = (10*rev) + slice;
        num = Math.floor(num/10);
    }

    if(rev < -limit || rev > limit) return 0;

    return (numCopy < 0)? -rev : rev;
};