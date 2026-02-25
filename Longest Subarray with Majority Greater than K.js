class Solution {
  longestSubarray(arr, k) {
    let n = arr.length;
    let sum = 0;
    let ans = 0;
    let mp = new Map();

    // Equivalent to mp[0] = -1
    mp.set(0, -1);

    for (let i = 0; i < n; i++) {
      sum += (arr[i] > k ? 1 : -1);

      if (sum > 0) {
        ans = i + 1;
      }

      if (mp.has(sum - 1)) {
        ans = Math.max(ans, i - mp.get(sum - 1));
      }

      if (!mp.has(sum)) {
        mp.set(sum, i);
      }
    }

    return ans;
  }
}