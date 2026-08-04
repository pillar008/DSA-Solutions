/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

    let ledger = new Map();
    for(let i=0;i<s.length;i++){
        let char = s[i];
        ledger.set(char,(ledger.get(char)||0)+1);
    }
    for(let i = 0;i<t.length;i++){
        let target = t[i];
        
        if(!ledger.has(target)){
            return false;
        }

        let count = ledger.get(target) - 1;

        if(count === 0){
            ledger.delete(target);
        }
        else{
            ledger.set(target,count);
        }
    }
    return ledger.size === 0;
};