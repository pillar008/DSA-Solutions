/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s=s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g,'');
  let n = s.length-1;
  for(let i =0;i<(s.length)/2;i++){
    if(s[i]!=s[n]){
        return false;
    }
    n--;
  }  
  return true;
};