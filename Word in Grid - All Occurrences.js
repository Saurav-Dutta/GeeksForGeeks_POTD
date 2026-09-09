class Solution {
    /**
     * @param {character[][]} mat
     * @param {string} word
     * @return {number[][]}
     */
    searchWord(mat, word) {
        const n = mat.length;
        if (n === 0) return [];
        const m = mat[0].length;
        const k = word.length;
        const ans = [];

        // 8 direction vectors for grid movement
        const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
        const dc = [-1, 0, 1, -1, 1, -1, 0, 1];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // If the first character doesn't match, skip
                if (mat[i][j] !== word[0]) {
                    continue;
                }

                // Check all 8 directions
                for (let d = 0; d < 8; d++) {
                    let found = true;

                    for (let p = 1; p < k; p++) {
                        const nr = i + p * dr[d];
                        const nc = j + p * dc[d];

                        // Boundary and character matching check
                        if (nr < 0 || nr >= n || nc < 0 || nc >= m || mat[nr][nc] !== word[p]) {
                            found = false;
                            break;
                        }
                    }

                    // If word is completely found in this direction, record the starting coordinates
                    if (found) {
                        ans.push([i, j]);
                        break; // Move to the next grid cell
                    }
                }
            }
        }
        return ans;
    }
}
