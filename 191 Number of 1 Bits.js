// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var num = 0;
    while(n) {
        n &= n - 1;
        num++;
    }
    return num;
};

if (require.main == module) {
    console.log(hammingWeight(5));
}
