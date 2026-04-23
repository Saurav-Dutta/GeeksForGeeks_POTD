class Solution {
  canSplit(arr) {
    let n = arr.length;

    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }

    let sum1 = sum, sum2 = 0;

    for (let m = n - 1; m >= 0; m--) {
      sum2 += arr[m];
      sum1 -= arr[m];

      if (sum1 === sum2) return true;
    }

    return false;
  }
}