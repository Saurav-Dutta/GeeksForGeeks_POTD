class Solution {
    maxDistance(V, src, edges) {
        const adj = Array.from({ length: V }, () => []);

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        const dist = new Array(V).fill(-Infinity);
        dist[src] = 0;

        const pq = [[0, src]];

        while (pq.length > 0) {
            pq.sort((a, b) => b[0] - a[0]);
            const [_, u] = pq.shift();

            for (const [v, w] of adj[u]) {
                if (dist[u] !== -Infinity && dist[v] < dist[u] + w) {
                    dist[v] = dist[u] + w;
                    pq.push([dist[v], v]);
                }
            }
        }

        // Convert unreachable nodes to "INF"
        return dist.map(x => (x === -Infinity ? "INF" : x));
    }
}