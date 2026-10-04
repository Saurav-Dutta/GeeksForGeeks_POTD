class Solution {
    findPerimeter(mat) {
        const n = mat.length;
        const m = mat[0].length;
        let ans = 0;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 1) {
                    // Check Top Boundary
                    if (i !== 0) {
                        if (mat[i - 1][j] === 0) ans++;
                    } else {
                        ans++;
                    }
                    
                    // Check Left Boundary
                    if (j !== 0) {
                        if (mat[i][j - 1] === 0) ans++;
                    } else {
                        ans++;
                    }
                    
                    // Check Bottom Boundary
                    if (i !== n - 1) {
                        if (mat[i + 1][j] === 0) ans++;
                    } else {
                        ans++;
                    }
                    
                    // Check Right Boundary
                    if (j !== m - 1) {
                        if (mat[i][j + 1] === 0) ans++;
                    } else {
                        ans++;
                    }
                }
            }
        }
        return ans;
    }
}
