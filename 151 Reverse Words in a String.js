// https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var st = [];
	var i = 0;
	while(i < str.length && str[i] === ' ') {
		i++;
	}
	var start = i;
	i++;
	while(i < str.length) {
		if(str[i] === ' ') {
			st.push(str.substr(start, i - start));
			i++;
			while(i < str.length && str[i] === ' ') {
				i++;
			}
			if(i < str.length) {
				start = i;
			}
		} else {
			i++;
		}
	}
	if(str.length > 0 && str[str.length - 1] != ' ') {
		st.push(str.substr(start, i - start));
	}
	
	var res = '';
	while(st.length > 1) {
		res += st.pop() + ' ';
	}
	if(st.length === 1) {
		res += st.pop();
	} 
	return res;
};

if (require.main == module) { 
    console.log(reverseWords('a'));
}
