class Solution {
  countBSTs(arr) {
    const n = arr.length;
    const MOD = 1e9 + 7;

    // Catalan DP
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
      for (let k = 1; k <= i; k++) {
        dp[i] = (dp[i] + (dp[k - 1] * dp[i - k]) % MOD) % MOD;
      }
    }

    // Map value -> index after sorting
    let temp = [...arr];
    let sorted = [...arr].sort((a, b) => a - b);

    let mp = new Map();
    for (let i = 0; i < n; i++) {
      mp.set(sorted[i], i);
    }

    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
      let e = temp[i];
      let idx = mp.get(e);

      let left = idx;
      let right = n - idx - 1;

      ans[i] = (dp[left] * dp[right]) % MOD;
    }

    return ans;
  }
}