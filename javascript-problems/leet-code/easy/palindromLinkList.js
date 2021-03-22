
  // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 let a = new ListNode(1);
 let b = new ListNode(2);
 a.next = b;

 let c = new ListNode(2);
 b.next = c;
 let d = new ListNode(1);
 c.next = d;
 console.log(a);
 console.log(c);
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */


// var isPalindrome = function (head) {
//   let node = "",
//     rev = "";

//   while (head) {
//     node += head.val;
//     // console.log(node)
//     rev = head.val + rev;
//     // console.log(rev)
//     head = head.next;
//   }
//   return node === rev;
// };
 

var isPalindrome = function (head) {
  if (!head) return head;
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    console.log(slow)
  }
  let rev = reverse(slow);
  console.log(slow);
  while (head != null && rev != null) {
    if (head.val !== rev.val) {
      return false;
    }
    head = head.next;
    rev = rev.next;
  }
  return true;
};

var reverse = function (head) {
  var current = head;
  var prev;
  var next;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;

  return head;
};

console.log(isPalindrome(a))
