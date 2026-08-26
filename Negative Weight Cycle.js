class Solution {
    isNegativeWeightCycle(n, edges) {
        // Initialize distances with a large infinity-like boundary value
        const INF = 1e8;
        const dist = new Array(n + 1).fill(INF);
        
        // Bellman-Ford requires a starting point to run correctly. 
        // For cycle detection across disconnected components, we initialize all to 0 or check safely.
        // Assuming standard 0-indexed or 1-indexed node starting limits:
        dist[0] = 0; 
        
        const m = edges.length;
        
        // Relax all edges (n - 1) times
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < m; j++) {
                const u = edges[j][0];
                const v = edges[j][1];
                const wt = edges[j][2];
                
                if (dist[u] !== INF && dist[u] + wt < dist[v]) {
                    dist[v] = dist[u] + wt;
                }
            }
        }
        
        // 1st extra relaxation pass to check for negative cycles
        for (let j = 0; j < m; j++) {
            const u = edges[j][0];
            const v = edges[j][1];
            const wt = edges[j][2];
            
            if (dist[u] !== INF && dist[u] + wt < dist[v]) {
                return 1;
            }
        }
        
        return 0;
    }
}
