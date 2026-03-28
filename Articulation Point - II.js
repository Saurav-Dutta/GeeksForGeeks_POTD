// Articulation Point - II

class Solution {
  dfs(u, parent, disc, low, visited, apSet, adj, timeObj) {
    visited[u] = true;
    disc[u] = low[u] = ++timeObj.time;

    let children = 0;

    for (let v of adj[u]) {
      if (!visited[v]) {
        children++;

        this.dfs(v, u, disc, low, visited, apSet, adj, timeObj);

        // Update low value
        low[u] = Math.min(low[u], low[v]);

        // Articulation condition (non-root)
        if (low[v] >= disc[u] && parent !== -1) {
          apSet.add(u);
        }

      } else if (v !== parent) {
        // Back edge
        low[u] = Math.min(low[u], disc[v]);
      }
    }

    // Root node condition
    if (parent === -1 && children > 1) {
      apSet.add(u);
    }
  }

  articulationPoints(V, edges) {
    // Build adjacency list
    let adj = new Array(V).fill(0).map(() => []);

    for (let [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    let disc = new Array(V).fill(-1);
    let low = new Array(V).fill(-1);
    let visited = new Array(V).fill(false);
    let apSet = new Set();

    let timeObj = { time: 0 }; // simulate pass-by-reference

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        this.dfs(i, -1, disc, low, visited, apSet, adj, timeObj);
      }
    }

    let result = Array.from(apSet).sort((a, b) => a - b);

    return result.length === 0 ? [-1] : result;
  }
}