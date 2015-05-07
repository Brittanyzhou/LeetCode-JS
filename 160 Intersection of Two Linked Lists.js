// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) {
		return null;
	}
	var lenA = 0;
	var lenB = 0;
	var hA = headA;
	var hB = headB;
	while(hA.next) {
		lenA++;
		hA = hA.next;
	}
	while(hB.next) {
		lenB++;
		hB = hB.next;
	}
	if(hA !== hB) {
		return null;
	}
	hA = headA;
	hB = headB;
	if(lenA > lenB) {
		for(var i = 0; i < lenA - lenB; i++) {
			hA = hA.next;
		}
	}
	else {
		for(var i = 0; i < lenB - lenA; i++) {
			hB = hB.next;
		}
	}
	while(hA != hB) {
		hA = hA.next;
		hB = hB.next;
	}
	return hA;
};
