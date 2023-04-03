// 67. Add Binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let m = a.length
  let n = b.length

  let carry = 0
  let res = ''
  for (let i=a.length-1, j = b.length - 1; i>=0 || j>=0; i--, j--){
      let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0)  + carry
      res = (sum%2) + res
      carry = sum > 1 ? 1 : 0
  }
  if (carry) res = '1' + res
  return res
};
// -------------------------------------------------------------------------------------------------------------

// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
    let arr = str.split('')
    let result = []
    let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'
    for (let i of arr){
        if (alphabet.includes(i.toLowerCase())){
            result.push(i.toLowerCase())
        }
    }
    return (result.join('')) == result.reverse().join('')
};

// -------------------------------------------------------------------------------------------------------------

// 168. Excel Sheet Column Title

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(n) {
    var num = n;
    var tmp = 0;
    var res = '';
    while(num>0){
        tmp = num%26;
        if(tmp === 0) tmp = 26;
        res = getChar(tmp) + res;
        num = (num - tmp) / 26;
    }
    return res
};

var getChar = function (num){
    var start = 'A' .charCodeAt(0);
    return String.fromCharCode(start+num - 1);
};

// -------------------------------------------------------------------------------------------------------------

// 171. Excel Sheet Column Number

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let sum = 0
    for (let i=0; i<columnTitle.length; i++){
        sum = (sum * 26) + (columnTitle.charCodeAt(i)-64)
    }
    return sum
};

// -------------------------------------------------------------------------------------------------------------

// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    let sHashMap = {}
    let tHashMap = {}
    let cur = 0
    while(cur<=s.length-1){
        if (sHashMap[s[cur]] !== tHashMap[t[cur]]){
            return false;
        }
        sHashMap [s[cur]] = cur+1
        tHashMap [t[cur]] = cur+1
        cur++
    }
    return true;
};

// -------------------------------------------------------------------------------------------------------------
