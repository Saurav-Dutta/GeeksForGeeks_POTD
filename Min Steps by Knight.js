class Solution {
    minStepToReachTarget(knightPos, targetPos, n) {
        // Converting 1-based indexing to 0-based indexing
        let sx = knightPos[0] - 1, sy = knightPos[1] - 1;
        let tx = targetPos[0] - 1, ty = targetPos[1] - 1;
        
        if (sx === tx && sy === ty) return 0;
        
        // Creating a 2D visited array initialized to false
        let vis = Array.from({ length: n }, () => new Array(n).fill(false));
        
        // Queue elements store: [x, y, steps]
        let q = [];
        q.push([sx, sy, 0]);
        vis[sx][sy] = true;
        
        // Possible directional moves for a Knight
        const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
        const dy = [-1, 1, -2, 2, -2, 2, -1, 1];
        
        let head = 0; // Pointer to optimize queue unshift/shift overhead
        
        while (head < q.length) {
            let [x, y, steps] = q[head++];
            
            for (let i = 0; i < 8; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                
                // Boundary check and visited check
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !vis[nx][ny]) {
                    if (nx === tx && ny === ty) {
                        return steps + 1;
                    }
                    vis[nx][ny] = true;
                    q.push([nx, ny, steps + 1]);
                }
            }
        }
        
        return -1;
    }
}
