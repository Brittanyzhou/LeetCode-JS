// https://leetcode.com/problems/factorial-trailing-zeroes/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var res = 0;
    while(Math.floor(n / 5)) {
        res += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return res;
};
