class Solution {
    longestPath(s, edges) {
        const n = s.length;
        
        // Build the adjacency list
        const g = Array.from({ length: n }, () => []);
        for (const e of edges) {
            const u = e[0] - 1;
            const v = e[1] - 1;
            g[u].push(v);
            g[v].push(u);
        }
        
        // Map string characters to binary states (1 for 'B', 0 otherwise)
        const c = new Array(n);
        for (let i = 0; i < n; ++i) {
            c[i] = (s[i] === 'B') ? 1 : 0;
        }
        
        // Flatten the tree structure to find execution order via Iterative DFS
        const par = new Array(n).fill(-1);
        const order = [];
        const st =;
        par[0] = -2;
        
        while (st.length > 0) {
            const u = st.pop();
            order.push(u);
            for (const v of g[u]) {
                if (v !== par[u]) {
                    par[v] = u;
                    st.push(v);
                }
            }
        }
        
        const down = new Array(n).fill(1);
        const up = new Array(n).fill(1);
        let ans = 1;
        
        // Post-order processing (Bottom-up DP)
        for (let i = n - 1; i >= 0; --i) {
            const u = order[i];
            let t1 = 0;
            let t2 = 0;
            
            for (const v of g[u]) {
                if (par[v] === u && c[v] === c[u]) {
                    if (down[v] > t1) {
                        t2 = t1;
                        t1 = down[v];
                    } else if (down[v] > t2) {
                        t2 = down[v];
                    }
                }
            }
            down[u] = t1 + 1;
            ans = Math.max(ans, down[u]);
            if (t2 > 0) {
                ans = Math.max(ans, t1 + t2 + 1);
            }
        }
        
        // Pre-order processing (Top-down DP)
        for (const u of order) {
            let t1 = 0;
            let t2 = 0;
            let id = -1;
            
            for (const v of g[u]) {
                if (par[v] === u && c[v] === c[u]) {
                    if (down[v] > t1) {
                        t2 = t1;
                        t1 = down[v];
                        id = v;
                    } else if (down[v] > t2) {
                        t2 = down[v];
                    }
                }
            }
            
            for (const v of g[u]) {
                if (par[v] === u) {
                    if (c[v] !== c[u]) {
                        up[v] = 1;
                    } else {
                        up[v] = 1 + Math.max(up[u], 1 + (v === id ? t2 : t1));
                    }
                }
            }
        }
        
        // Process cross-color edge combinations
        for (const e of edges) {
            const u = e[0] - 1;
            const v = e[1] - 1;
            if (c[u] !== c[v]) {
                ans = Math.max(ans, Math.max(down[u], up[u]) + Math.max(down[v], up[v]));
            }
        }
        
        return ans;
    }
}
