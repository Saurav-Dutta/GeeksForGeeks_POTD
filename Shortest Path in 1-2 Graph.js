class Solution {
    shortestPath(n, src, dest, edges) {
        const adj = Array.from({ length: n }, () => []);

        for (const e of edges) {
            const [u, v, w] = e;
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }

        const dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        // Min Heap
        const pq = [];
        const push = (item) => {
            pq.push(item);
            let i = pq.length - 1;
            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (pq[p][0] <= pq[i][0]) break;
                [pq[p], pq[i]] = [pq[i], pq[p]];
                i = p;
            }
        };

        const pop = () => {
            if (pq.length === 1) return pq.pop();
            const top = pq[0];
            pq[0] = pq.pop();
            let i = 0;

            while (true) {
                let l = 2 * i + 1,
                    r = 2 * i + 2,
                    smallest = i;

                if (l < pq.length && pq[l][0] < pq[smallest][0]) smallest = l;
                if (r < pq.length && pq[r][0] < pq[smallest][0]) smallest = r;

                if (smallest === i) break;
                [pq[i], pq[smallest]] = [pq[smallest], pq[i]];
                i = smallest;
            }

            return top;
        };

        push([0, src]);

        while (pq.length) {
            const [w, u] = pop();

            if (w > dist[u]) continue;

            for (const [v, wt] of adj[u]) {
                if (w + wt < dist[v]) {
                    dist[v] = w + wt;
                    push([dist[v], v]);
                }
            }
        }

        return dist[dest] === Infinity ? -1 : dist[dest];
    }
}
