class Solution {
    dfs(u, visited, adj) {
        visited[u] = true;
        for (const v of adj[u]) {
            if (!visited[v]) {
                this.dfs(v, visited, adj);
            }
        }
    }

    minEdgesReq(n, edges) {
        const E = edges.length;
        const need = n - 1;
        if (need > E) return -1;

        const adj = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Array(n).fill(false);
        let components = 0;

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                components++;
                this.dfs(i, visited, adj);
            }
        }

        return components - 1;
    }
}