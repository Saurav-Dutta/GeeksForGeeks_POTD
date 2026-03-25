//Minimum height roots

class Solution {
  minHeightRoot(V, edges) {
    // Build adjacency list
    let adj = new Array(V + 1).fill(0).map(() => []);
    let inDegree = new Array(V + 1).fill(0);

    for (let [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
      inDegree[u]++;
      inDegree[v]++;
    }

    let q = [];
    let head = 0;

    // Push all leaf nodes
    for (let i = 0; i <= V; i++) {
      if (inDegree[i] === 1) {
        q.push(i);
      }
    }

    let left = V;

    // Remove leaves level by level
    while (left > 2) {
      let size = q.length - head;
      left -= size;

      while (size--) {
        let node = q[head++];

        for (let nei of adj[node]) {
          inDegree[nei]--;

          if (inDegree[nei] === 1) {
            q.push(nei);
          }
        }
      }
    }

    // Remaining nodes are answer
    let ans = [];
    while (head < q.length) {
      ans.push(q[head++]);
    }

    return ans;
  }
}