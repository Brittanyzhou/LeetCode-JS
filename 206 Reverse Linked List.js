// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    var next = head.next;
    head.next = null;
    var reversed = reverseList(next);
    var newHead = reversed;
    while(reversed.next) {
        reversed = reversed.next;
    }
    reversed.next = head;
    return newHead;
};
