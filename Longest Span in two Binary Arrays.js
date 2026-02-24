class Solution {
  equalSumSpan(a1, a2) {
    let n = a1.length;
    let mp = new Map();
    let ans = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
      sum += a1[i] - a2[i];

      if (sum === 0) {
        ans = i + 1;
      }

      if (mp.has(sum)) {
        ans = Math.max(ans, i - mp.get(sum));
      } else {
        mp.set(sum, i);
      }
    }

    return ans;
  }
}