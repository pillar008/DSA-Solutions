/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};
    for(let i = 0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1;
        }
        else{
            ++map[s[i]];
        }
    }

    let check = ["a","e","i","o","u"];
    let maxVowels = 0;
    let maxConsonant = 0;
    let mapKeys = Object.keys(map)
    for(let i = 0;i<mapKeys.length;i++){
        if(check.includes(mapKeys[i])){
            if(map[mapKeys[i]]>maxVowels){
                maxVowels = map[mapKeys[i]];
            }
        } 
        
        else {
            if(map[mapKeys[i]] > maxConsonant)
                maxConsonant = map[mapKeys[i]];
        }
    }
    return maxVowels + maxConsonant;
};