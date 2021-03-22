
//  Definition for singly-linked list.
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 **/

let a = new ListNode(1);
let b = new ListNode(2);
a.next = b;

let c = new ListNode(3);
b.next = c;
let d = new ListNode(4);
c.next = d;


var reverseList = function (head) {
  let rev = null,
    temp = "";

  while (head) {
    temp = head.next;

    head.next = rev;

    rev = head;

    head = temp;
  }
  return rev;
};

console.log(reverseList(a))