/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    let sentinel = null;
    if(list1.val < list2.val){
        sentinel = list1;
        list1 = list1.next;
    }
    else{
        sentinel = list2;
        list2 = list2.next;
    }
    let start =  sentinel;

    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            sentinel.next = list1;
            list1 = list1.next;
            sentinel = sentinel.next;
        }
        else{
            sentinel.next = list2;
            list2 = list2.next;
            sentinel = sentinel.next;
        }
    }

    if(!list1){
        sentinel.next = list2;
    }
    if(!list2){
        sentinel.next = list1;
    }
        return start;
};