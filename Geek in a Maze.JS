class Solution {
    numberOfCells(r, c, u, d, mat) {
        const n = mat.length;
        const m = mat[0].length;
        
        if (mat[r][c] === '#') {
            return 0;
        }
        
        const INF = 1e9;
        // Initialize 2D grid with INF values
        const dist = Array.from({ length: n }, () => Array(m).fill(INF));
        
        // Simple Deque implementation using pointer and arrays
        const dq = [[r, c]];
        let head = 0;
        
        dist[r][c] = 0;
        
        // Directions: Up (0), Down (1), Left (2), Right (3)
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        
        while (head < dq.length) {
            const [x, y] = dq[head++];
            
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dr[dir];
                const ny = y + dc[dir];
                
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                    continue;
                }
                if (mat[nx][ny] === '#') {
                    continue;
                }
                
                // Only 'Up' movement (dir === 0) incurs a cost
                const cost = (dir === 0 ? 1 : 0);
                
                if (dist[x][y] + cost < dist[nx][ny]) {
                    dist[nx][ny] = dist[x][y] + cost;
                    
                    if (cost === 0) {
                        // push_front simulation
                        if (head > 0) {
                            head--;
                            dq[head] = [nx, ny];
                        } else {
                            dq.unshift([nx, ny]);
                        }
                    } else {
                        // push_back simulation
                        dq.push([nx, ny]);
                    }
                }
            }
        }
        
        let answer = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === '#' || dist[i][j] === INF) {
                    continue;
                }
                
                const upMoves = dist[i][j];
                const downMoves = upMoves + (i - r);
                
                if (upMoves <= u && downMoves <= d) {
                    answer++;
                }
            }
        }
        
        return answer;
    }
}
