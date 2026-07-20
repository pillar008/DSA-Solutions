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
var getIntersectionNode = function (headA, headB) {
    let curr1 = headA;
    let curr2 = headB;
    while (curr1 != curr2) {
        if (curr1 === null) {
            curr1 = headB;
        }
        else {
            curr1 = curr1.next;
        }

        if (curr2 === null) {
            curr2 = headA;
        }
        else { 
            curr2 = curr2.next; 
        }
    }
    return curr1;
};