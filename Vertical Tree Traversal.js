class Solution {
  verticalOrder(root) {
    if (!root) return [];

    let q = [[root, 0]];
    let head = 0;

    let mp = new Map(); // level -> nodes
    let idx = 0;

    while (head < q.length) {
      let [node, level] = q[head++];

      idx = Math.min(idx, level);

      if (!mp.has(level)) mp.set(level, []);
      mp.get(level).push(node.data);

      if (node.left) q.push([node.left, level - 1]);
      if (node.right) q.push([node.right, level + 1]);
    }

    let vec = new Array(mp.size).fill(0).map(() => []);

    if (idx < 0) idx = -idx;

    for (let [key, value] of mp) {
      for (let y of value) {
        vec[idx + key].push(y);
      }
    }

    return vec;
  }
}