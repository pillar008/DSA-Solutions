var convertToBase7 = function(num) {
    if (num === 0) return "0";
    
    let isNegative = num < 0;
    let n = Math.abs(num);
    let result = "";
    
    while (n > 0) {
        result = (n % 7) + result;
        n = Math.floor(n / 7);
    }
    
    return isNegative ? "-" + result : result;
};
