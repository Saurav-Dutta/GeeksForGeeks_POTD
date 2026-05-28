class Solution {
    dfs(root, mp, x) {
        if (root === null) return;

        mp.set(x, (mp.get(x) || 0) + root.data);

        this.dfs(root.left, mp, x - 1);
        this.dfs(root.right, mp, x + 1);
    }

    verticalSum(root) {
        let mp = new Map();
        let ans = [];

        this.dfs(root, mp, 0);

        // Sort keys because Map does not automatically sort like C++ map
        let keys = [...mp.keys()].sort((a, b) => a - b);

        for (let key of keys) {
            ans.push(mp.get(key));
        }

        return ans;
    }
}