class Solution {

  dfs(root, currSum, k, mp) {
    if (root === null) return 0;

    currSum += root.data;
    let count = 0;

    if (mp.has(currSum - k)) {
      count += mp.get(currSum - k);
    }

    mp.set(currSum, (mp.get(currSum) || 0) + 1);

    count += this.dfs(root.left, currSum, k, mp);
    count += this.dfs(root.right, currSum, k, mp);

    mp.set(currSum, mp.get(currSum) - 1); // backtrack

    return count;
  }

  countAllPaths(root, k) {
    let mp = new Map();
    mp.set(0, 1);

    return this.dfs(root, 0, k, mp);
  }
}