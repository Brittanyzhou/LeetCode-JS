// https://leetcode.com/problems/min-stack/

/**
 * @constructor
 */
var MinStack = function() {
	this.stack1 = [];
	this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
	if(this.stack2.length === 0) {
		this.stack1.push(x);
		this.stack2.push(x);
	} else {
		var num = this.stack2.pop();
		this.stack2.push(num);
		this.stack1.push(x);
		this.stack2.push(x < num ? x : num);
	}
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
	this.stack1.pop();
	this.stack2.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
	var num = this.stack1.pop();
	this.stack1.push(num);
	return num;
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
	var num = this.stack2.pop();
	this.stack2.push(num);
	return num;
};

if (require.main == module) { 
	var st = new MinStack();
	st.push(-2);
	st.push(0);
	st.push(-1);
    console.log(st.getMin());
	console.log(st.top());
	st.pop();
	console.log(st.getMin());
}
