class Solution {
    getSize(root) {
        if (!root) {
            return 0;
        }

        return 1 + this.getSize(root.left) + this.getSize(root.right);
    }
}