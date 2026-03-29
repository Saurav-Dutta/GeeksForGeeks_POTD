class Solution {
  fun(i, sum1, sum2, n, arr, diff, dp) {
    if (i === n) {
      if (sum1 - sum2 === diff) return 1;
      return 0;
    }

    if (dp[i][sum1][sum2] !== -1) {
      return dp[i][sum1][sum2];
    }

    let op1 = this.fun(i + 1, sum1 + arr[i], sum2, n, arr, diff, dp);
    let op2 = this.fun(i + 1, sum1, sum2 + arr[i], n, arr, diff, dp);

    return dp[i][sum1][sum2] = op1 + op2;
  }

  countPartitions(arr, diff) {
    let n = arr.length;
    let sum = arr.reduce((acc, val) => acc + val, 0);

    // Initialize 3D DP array
    let dp = Array.from({ length: n + 1 }, () =>
      Array.from({ length: sum + 1 }, () =>
        Array(sum + 1).fill(-1)
      )
    );

    return this.fun(0, 0, 0, n, arr, diff, dp);
  }
}