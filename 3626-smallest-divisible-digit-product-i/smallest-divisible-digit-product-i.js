/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let curr = n;

    while(true){
    let check = curr;
    let product =1;


    while(check>0){
        let temp = check%10;
        product *= temp;
        check = Math.floor(check/10);
    
        if(product === 0) break;
    
    }


    if(product % t === 0){
        return curr;
    }

    curr++;

    }

};