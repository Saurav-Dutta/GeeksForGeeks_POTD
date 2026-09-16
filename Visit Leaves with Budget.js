class Solution {
    /**
     * Helper method to perform Depth First Search and collect leaf node levels.
     * @param {Node|null} root 
     * @param {number} level 
     * @param {number[]} leaves 
     */
    dfs(root, level, leaves) {
        if (root === null) {
            return;
        }
        
        // Check if the current node is a leaf node
        if (root.left === null && root.right === null) {
            leaves.push(level);
            return;
        }
        
        this.dfs(root.left, level + 1, leaves);
        this.dfs(root.right, level + 1, leaves);
    }

    /**
     * Main method to get the maximum number of leaves that can be collected within cost k.
     * @param {Node|null} root 
     * @param {number} k 
     * @returns {number}
     */
    getCount(root, k) {
        if (root === null || k <= 0) {
            return 0;
        }

        const leaves = [];
        this.dfs(root, 1, leaves);

        // JavaScript sorts numbers alphabetically by default, 
        // so a numeric comparator function (a - b) is required for ascending order.
        leaves.sort((a, b) => a - b);

        let count = 0;
        let cost = 0;

        for (const depth of leaves) {
            if (cost + depth > k) {
                break;
            }
            cost += depth;
            count++;
        }

        return count;
    }
}
