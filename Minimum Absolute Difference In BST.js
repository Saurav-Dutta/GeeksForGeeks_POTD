class Solution {
    constructor() {
        this.ans = 1e9;
    }

    /**
     * @param {Node} root
     * @return {number}
     */
    absDiff(root) {
        this.ans = 1e9;
        // Wrap prev in an object to simulate pass-by-reference
        let state = { prev: 1e7 }; 
        
        this.dfs(root, state);
        return this.ans;
    }

    /**
     * @param {Node} root
     * @param {Object} state
     */
    dfs(root, state) {
        if (root === null) return;

        // In-order traversal: Left
        this.dfs(root.left, state);

        // Process current node
        this.ans = Math.min(this.ans, Math.abs(root.data - state.prev));
        state.prev = root.data;

        // In-order traversal: Right
        this.dfs(root.right, state);
    }
}
