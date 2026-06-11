/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        // Check if the character is uppercase (A-Z)
        if (code >= 65 && code <= 90) {
            // 65 | 32 = 97 ('a')
            result += String.fromCharCode(code | 32); 
        } else {
            result += s[i];
        }
    }
    return result;
};