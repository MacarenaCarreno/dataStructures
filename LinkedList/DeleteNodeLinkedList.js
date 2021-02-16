var deleteNode = function(node) {
  if (node.next !== null) {
    node.val = node.next.val;
    node.next = node.next.next;
  } else {
    console.log('Nothing to remove!');
  }
};

let ListNode = {
  val: 1,
  next: { val: 9, next: { val: 5, next: null } },
};

console.log(ListNode);
deleteNode(ListNode);
console.log(ListNode);
deleteNode(ListNode);
console.log(ListNode);
deleteNode(ListNode);
