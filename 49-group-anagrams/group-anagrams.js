/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    if(!strs.length){
        return strs;
    }

    for (let i = 0; i < strs.length; i++) {
        let signature = strs[i].split('').sort().join('');

        if(map[signature] === undefined){
            map[signature] = [];
        }
        
       map[signature].push(strs[i]);
    }

    return Object.values(map);


};