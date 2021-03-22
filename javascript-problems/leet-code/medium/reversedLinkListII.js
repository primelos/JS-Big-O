/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = { next: head };
  let pre = dummy;

  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  
  let cur = pre.next;

  for (let i = 0; i < right - left; i++) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return dummy.next;
};
