class Solution {
    /**
     * @param {string[][]} mat
     * @param {string} word
     * @returns {number[][]}
     */
    searchWord(mat, word) {
        const n = mat.length;
        const m = mat[0].length;
        const k = word.length;
        const ans = [];
        
        // Direction vectors for moving in 8 directions
        const dr = [-1, -1, -1,  0, 0,  1, 1, 1];
        const dc = [-1,  0,  1, -1, 1, -1, 0, 1];
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // Check if the current matrix character matches the first letter of the word
                if (mat[i][j] !== word[0]) {
                    continue;
                }
                
                for (let d = 0; d < 8; d++) {
                    let found = true;
                    
                    for (let p = 1; p < k; p++) {
                        let nr = i + p * dr[d];
                        let nc = j + p * dc[d];
                        
                        // Check boundary constraints and character matching
                        if (nr < 0 || nr >= n || nc < 0 || nc >= m || mat[nr][nc] !== word[p]) {
                            found = false;
                            break;
                        }
                    }
                    
                    if (found) {
                        ans.push({ i, j });
                        break; // Stop exploring other directions from the same starting cell
                    }
                }
            }
        }
        
        return ans;
    }
}
