class Solution {
  canFinish(n, prerequisites) {
    // Adjacency list
    let edges = new Array(n).fill(0).map(() => []);
    let indegree = new Array(n).fill(0);

    // Build graph
    for (let [a, b] of prerequisites) {
      edges[b].push(a);
      indegree[a]++;
    }

    // Queue for nodes with indegree 0
    let q = [];
    let head = 0;

    for (let i = 0; i < n; i++) {
      if (indegree[i] === 0) {
        q.push(i);
      }
    }

    let total = 0;

    while (head < q.length) {
      let cur = q[head++];
      total++;

      if (total === n) return true;

      for (let next of edges[cur]) {
        indegree[next]--;

        if (indegree[next] === 0) {
          q.push(next);
        }
      }
    }

    return total === n;
  }
}