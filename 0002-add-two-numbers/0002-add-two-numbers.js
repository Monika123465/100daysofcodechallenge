/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryfd = 0
    let sum = 0
    let headlist = new ListNode(0)
    let now = headlist
     let  a = l1
      let b = l2
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carryfd
    carryfd = Math.floor(sum / 10)
    now.next = new ListNode(sum % 10)
    now = now.next
    a = a ? a.next : null
    b = b ? b.next : null
  }
  if (carryfd) now.next = new ListNode(carryfd)
  return headlist.next
    
};