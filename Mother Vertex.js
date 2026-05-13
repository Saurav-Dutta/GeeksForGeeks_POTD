class Solution {
    dfs1(node, adj, vis, st) {
        vis[node] = 1;

        for (let it of adj[node]) {
            if (!vis[it]) {
                this.dfs1(it, adj, vis, st);
            }
        }

        st.push(node);
    }

    dfs2(node, rev, vis, comp, cid, mnObj) {
        vis[node] = 1;
        comp[node] = cid;

        mnObj.value = Math.min(mnObj.value, node);

        for (let it of rev[node]) {
            if (!vis[it]) {
                this.dfs2(it, rev, vis, comp, cid, mnObj);
            }
        }
    }

    findMotherVertex(V, edges) {
        let adj = Array.from({ length: V }, () => []);

        for (let e of edges) {
            adj[e[0]].push(e[1]);
        }

        let st = [];
        let vis = new Array(V).fill(0);

        for (let i = 0; i < V; i++) {
            if (!vis[i]) {
                this.dfs1(i, adj, vis, st);
            }
        }

        let rev = Array.from({ length: V }, () => []);

        for (let u = 0; u < V; u++) {
            for (let v of adj[u]) {
                rev[v].push(u);
            }
        }

        vis.fill(0);

        let comp = new Array(V).fill(-1);
        let compMin = [];
        let cid = 0;

        while (st.length > 0) {
            let node = st.pop();

            if (!vis[node]) {
                let mnObj = { value: node };

                this.dfs2(node, rev, vis, comp, cid, mnObj);

                compMin.push(mnObj.value);
                cid++;
            }
        }

        let indeg = new Array(cid).fill(0);

        for (let u = 0; u < V; u++) {
            for (let v of adj[u]) {
                if (comp[u] !== comp[v]) {
                    indeg[comp[v]]++;
                }
            }
        }

        let source = -1;
        let cnt = 0;

        for (let i = 0; i < cid; i++) {
            if (indeg[i] === 0) {
                source = i;
                cnt++;
            }
        }

        if (cnt !== 1) {
            return -1;
        }

        return compMin[source];
    }
}