class Solution {
    /**
     * @param {number[][]} adj
     * @param {number} start
     * @returns {[number, number]} [farthestNode, farthestDist]
     */
    bfs(adj, start) {
        const n = adj.length;
        const dist = new Array(n).fill(-1);
        
        // Using an array with a pointer to simulate an efficient queue
        const q = [];
        let head = 0;
        
        dist[start] = 0;
        q.push(start);
        
        let farthestNode = start;
        let farthestDist = 0;
        
        while (head < q.length) {
            const node = q[head++];
            
            for (let next of adj[node]) {
                // Adjusting 1-based index to 0-based index as per your C++ template
                next--; 
                
                if (dist[next] === -1) {
                    dist[next] = dist[node] + 1;
                    q.push(next);
                    
                    if (dist[next] > farthestDist) {
                        farthestDist = dist[next];
                        farthestNode = next;
                    }
                }
            }
        }
        
        return [farthestNode, farthestDist];
    }

    /**
     * @param {number[][]} adj
     * @returns {number}
     */
    partyHouse(adj) {
        // Find one end of the tree's diameter starting from node 0
        const [diameterEnd, _] = this.bfs(adj, 0);
        
        // Find the actual diameter from that endpoint
        const [__, diameter] = this.bfs(adj, diameterEnd);
        
        // The minimum maximum distance to any node (radius) is ceil(diameter / 2)
        return Math.floor((diameter + 1) / 2);
    }
}
