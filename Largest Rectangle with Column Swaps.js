class Solution {
    maxArea(mat) {
        const n = mat.length;
        const m = mat[0].length;
        const height = new Array(m).fill(0);
        let ans = 0;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 1) {
                    height[j]++;
                } else {
                    height[j] = 0;
                }
            }
            
            // Create a shallow copy and sort numerically in descending order
            const sortedHeight = [...height];
            sortedHeight.sort((a, b) => b - a);
            
            for (let j = 0; j < m; j++) {
                ans = Math.max(ans, sortedHeight[j] * (j + 1));
            }
        }
        
        return ans;
    }
}
