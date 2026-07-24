/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    svc(root, c) {
        if (!root) return 0;

        let l = 0, r = 0;

        if (root.left) {
            if (root.left.data === root.data + 1)
                l = this.svc(root.left, c + 1);
            else
                l = this.svc(root.left, 1);
        }

        if (root.right) {
            if (root.right.data === root.data + 1)
                r = this.svc(root.right, c + 1);
            else
                r = this.svc(root.right, 1);
        }

        return Math.max(l, r, c);
    }

    longestConsecutive(root) {
        let ans = this.svc(root, 1);
        return ans > 1 ? ans : -1;
    }
}