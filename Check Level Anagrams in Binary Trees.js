class Solution {
    areAnagrams(root1, root2) {
        // Use a Map to track the XOR results per level
        const xorMap = new Map();
        
        // Define the DFS helper function
        const dfs = (node, level) => {
            if (!node) return;
            
            // Get current value or 0 if level doesn't exist yet
            const currentXor = xorMap.get(level) || 0;
            xorMap.set(level, currentXor ^ node.data);
            
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        };
        
        // Traverse both trees
        dfs(root1, 0);
        dfs(root2, 0);
        
        // Verify all level accumulations cancel out to 0
        for (const val of xorMap.values()) {
            if (val !== 0) return false;
        }
        
        return true;
    }
}
