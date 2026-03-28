// Articulation Point - II

class Solution {
  articulationPoints(V, edges) {
    let adj = Array.from({ length: V }, () => []);

    for (let [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    let disc = new Array(V).fill(-1);
    let low = new Array(V).fill(-1);
    let visited = new Array(V).fill(false);
    let isAP = new Array(V).fill(false);

    let time = 0;

    const dfs = (u, parent) => {
      visited[u] = true;
      disc[u] = low[u] = time++;
      let children = 0;

      for (let v of adj[u]) {
        if (!visited[v]) {
          children++;
          dfs(v, u);

          low[u] = Math.min(low[u], low[v]);

          if (parent !== -1 && low[v] >= disc[u]) {
            isAP[u] = true;
          }
        } else if (v !== parent) {
          low[u] = Math.min(low[u], disc[v]);
        }
      }

      if (parent === -1 && children > 1) {
        isAP[u] = true;
      }
    };

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i, -1);
      }
    }

    let result = [];
    for (let i = 0; i < V; i++) {
      if (isAP[i]) result.push(i);
    }

    return result.length ? result : [-1];
  }
}