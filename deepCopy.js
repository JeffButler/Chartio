/**
 * Definition for singly-linked-random list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 *     this.random = null;
 * }
 */

 /*
 Run time:
  Let n be the number of nodes in the linked List
  Time: O(n) -> time it takes to walk through the ListNode twice.
  Space: O(n) -> keeping copies of all of the nodes in the list.
 */

 function deepCopy(head) {
   var newHead;
   var beginningOldHead = head;
   var beginningNewHead = newHead;
   var nodesSet = {};

   if (head) {
     newHead = new ListNode();
   } else {
     return head;
   }

   // Walks through once building the new LinkedList without randoms but stores association
   while (head != null) {
     nodesSet[head] = newHead;
     newHead.label = head.label;
     newHead.next = new ListNode();
     head = head.next;
     newHead = newHead.next;
   }

   //Leverages the association to set the correct randoms to the new LinkedList
   while(beginningOldHead != null) {
     if (nodesSet[beginningOldHead.random]) {
       beginningNewHead.random = nodesSet[beginningOldHead.random];
     } else {
       beginningNewHead.random = null;
     }
     beginningOldHead = beginningOldHead.next;
     beginningNewHead = beginningNewHead.next;
   }

   return beginningOldHead;
 }
