class Solution {
  topView(root) {
    if (!root) return [];

    let mp = new Map(); // hd -> node value
    let q = [[root, 0]];
    let res = [];

    while (q.length > 0) {
      let [node, hd] = q.shift();

      if (!mp.has(hd)) {
        mp.set(hd, node.data);
      }

      if (node.left) {
        q.push([node.left, hd - 1]);
      }

      if (node.right) {
        q.push([node.right, hd + 1]);
      }
    }

    // Sort keys (horizontal distance)
    let keys = Array.from(mp.keys()).sort((a, b) => a - b);

    for (let k of keys) {
      res.push(mp.get(k));
    }

    return res;
  }
}