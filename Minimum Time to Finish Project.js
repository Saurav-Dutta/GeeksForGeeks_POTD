class Solution {
    minTime(duration, dependencies) {
        const n = duration.length;

        const adj = Array.from({ length: n }, () => []);
        const indeg = new Array(n).fill(0);

        // Build adjacency list
        for (const d of dependencies) {
            adj[d[0]].push(d[1]);
            indeg[d[1]]++;
        }

        const finish = [...duration];

        // Initialize queue with nodes having indegree 0
        const q = [];
        for (let i = 0; i < n; i++) {
            if (indeg[i] === 0) {
                q.push(i);
            }
        }

        let front = 0;
        let cnt = 0;

        // Topological Sort (Kahn's Algorithm)
        while (front < q.length) {
            const u = q[front++];
            cnt++;

            for (const v of adj[u]) {
                finish[v] = Math.max(
                    finish[v],
                    finish[u] + duration[v]
                );

                indeg[v]--;

                if (indeg[v] === 0) {
                    q.push(v);
                }
            }
        }

        // Check for cycle
        if (cnt < n) return -1;

        // Find maximum completion time
        let ans = 0;
        for (const t of finish) {
            ans = Math.max(ans, t);
        }

        return ans;
    }
}