/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head || !head.next || k ===0){
    return head;
  }

  let point = head;
  let length = 1;

  while(head.next != null){
    length++;
    head = head.next;
  }  

  head.next = point;

  let size = k %length;
  let walk = length-size;

  for(let i=0;i<walk;i++){
    head = head.next;
  }

  let result = head.next;
  head.next = null;

  return result;
};