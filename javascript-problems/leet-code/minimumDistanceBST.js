// Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

// Example :

// Input: root = [4,2,6,1,3,null,null]
// Output: 1
// Explanation:
// Note that root is a TreeNode object, not an array.

// The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

//           4
//         /   \
//       2      6
//      / \    
//     1   3  

// while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */


var minDiffInBST = function(root) {
    let minVal = Infinity, prev = -Infinity

    function dfs(node){
        if(!node){
            return 
        }
        dfs(node.left)
        minVal = Math.min(minVal, node.val - prev)
        prev = node.val
        dfs(node.right)
    }
    dfs(root)
    return minVal

}