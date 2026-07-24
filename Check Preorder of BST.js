class Solution {
    // Function to return a list containing the preorder
    // traversal of the tree.
    preOrder(root) {
        const result = [];
        
        function traverse(node) {
            if (node === null) return;
            result.push(node.data);
            traverse(node.left);
            traverse(node.right);
        }
        
        traverse(root);
        return result;
    }
}