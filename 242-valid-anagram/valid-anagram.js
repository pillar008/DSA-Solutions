/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let count = {};

    if(s.length != t.length) return false;

    for(let i = 0 ; i < s.length;i++){
        let curr = s[i];

        if(count[curr] === undefined){
            count[curr] = 1;
        }
        else{
            count[curr]++;
        }
    }

    for(let j=0;j<t.length;j++){
        let curr = t[j];

        if(count[curr] === undefined || count[curr]===0){
            return false;
        }
        else{
            count[curr]--;
        }
    }
    return true;
};