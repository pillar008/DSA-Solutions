/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let m1={};
    let m2={};

    for(let i = 0;i<s.length;i++){
        if (m1[s[i]] === undefined && m2[t[i]] === undefined){
            m1[s[i]] = t[i];
            m2[t[i]] = s[i];
        }
        else if(m1[s[i]] != t[i]){
            return false;
        }
    }
    return true;
};