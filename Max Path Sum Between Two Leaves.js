class Solution {
    solve(root, ans) {
        if (root === null) {
            return -Infinity; // Equivalent to INT_MIN
        }
        if (root.left === null && root.right === null) {
            return root.data;
        }
        
        let left = this.solve(root.left, ans);
        let right = this.solve(root.right, ans);
        
        if (root.left !== null && root.right !== null) {
            ans.value = Math.max(ans.value, left + right + root.data);
            return root.data + Math.max(left, right);
        }
        
        if (root.left !== null) {
            return root.data + left;
        }
        return root.data + right;
    }

    maxPathSum(root) {
        if (root === null) {
            return -1;
        }
        
        // Wrap ans in an object to simulate pass-by-reference
        let ans = { value: -Infinity };
        this.solve(root, ans);
        
        if (ans.value === -Infinity) {
            return -1;
        }
        return ans.value;
    }
}
