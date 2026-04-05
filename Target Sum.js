class Solution {
  dfs(i, sum, arr, target, dp) {
    if (i === arr.length) {
      return sum === target ? 1 : 0;
    }

    let key = i + "," + sum;

    if (dp.has(key)) {
      return dp.get(key);
    }

    let op1 = this.dfs(i + 1, sum + arr[i], arr, target, dp);
    let op2 = this.dfs(i + 1, sum - arr[i], arr, target, dp);

    let ans = op1 + op2;
    dp.set(key, ans);

    return ans;
  }

  totalWays(arr, target) {
    let dp = new Map();
    return this.dfs(0, 0, arr, target, dp);
  }
}