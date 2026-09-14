class Solution {
    shortestPath(mat) {
        let n = mat.length;
        let m = mat[0].length;
        
        // 1. Mark all 0 cells and their adjacent neighbors as 2 (unsafe/blocked)
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 0) {
                    if (i > 0 && mat[i-1][j] !== 0) mat[i-1][j] = 2;
                    if (j > 0 && mat[i][j-1] !== 0) mat[i][j-1] = 2;
                    if (j < m - 1 && mat[i][j+1] !== 0) mat[i][j+1] = 2;
                    if (i < n - 1 && mat[i+1][j] !== 0) mat[i+1][j] = 2;
                }
            }
        }
        
        // Overwrite the original 0s to 2s (handled after neighbor checks to avoid skipping valid evaluations)
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 0) mat[i][j] = 2;
            }
        }

        // 2. Initialize the visited array
        let vis = Array.from({ length: n }, () => new Array(m).fill(false));
        let queue = [];
        
        // 3. Push all valid starting positions in the first column into the queue
        for (let i = 0; i < n; i++) {
            if (mat[i][0] === 1) {
                vis[i][0] = true;
                queue.push([i, 0]);
            }
        }
        
        let dis = 1;
        let head = 0; // Pointer index for O(1) queue popping

        // 4. Standard BFS traversal
        while (head < queue.length) {
            let sz = queue.length - head; 
            while (sz--) {
                let [i, j] = queue[head++];
                
                // If we reach the last column, return the current distance
                if (j === m - 1) {
                    return dis;
                }
                
                // Check all 4 movement directions
                if (i > 0 && mat[i-1][j] === 1 && !vis[i-1][j]) {
                    vis[i-1][j] = true; 
                    queue.push([i-1, j]);
                }
                if (j > 0 && mat[i][j-1] === 1 && !vis[i][j-1]) {
                    vis[i][j-1] = true; 
                    queue.push([i, j-1]);
                }
                if (j < m - 1 && mat[i][j+1] === 1 && !vis[i][j+1]) {
                    vis[i][j+1] = true; 
                    queue.push([i, j+1]);
                }
                if (i < n - 1 && mat[i+1][j] === 1 && !vis[i+1][j]) {
                    vis[i+1][j] = true; 
                    queue.push([i+1, j]);
                }
            }
            dis++;
        }
        
        return -1;
    }
}

