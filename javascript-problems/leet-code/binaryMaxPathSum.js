/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  console.log(root.val);
  let big = -Infinity;
  // console.log(big)
  function walk(node) {
    if (node === null) return -Infinity;

    const maxLeft = walk(node.left);
    const maxRight = walk(node.right);

    const maxConnected = Math.max(
      node.val,
      node.val + maxLeft,
      node.val + maxRight
    );
    console.log("m", maxConnected);
    big = Math.max(
      big,
      maxConnected,
      maxLeft,
      maxRight,
      node.val + maxLeft + maxRight
    );
    return maxConnected;
  }
  walk(root);
  return big;
};
