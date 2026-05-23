/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x;
    if(num < 0){
        return false;
    }
    let rev = 0;
    while (num > 0){
        let slice = num % 10;
        rev = (10*rev) + slice;
        num = Math.floor(num/10);
    }

    if(rev == x){
        return true;
    }
    else{
        return false;
    }
};