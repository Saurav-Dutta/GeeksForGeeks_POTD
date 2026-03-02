class Solution {
  maxWater(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    let lmax = new Array(n).fill(0);
    let rmax = new Array(n).fill(0);

    // Build left max array
    lmax[0] = arr[0];
    for (let i = 1; i < n; i++) {
      lmax[i] = Math.max(lmax[i - 1], arr[i]);
    }

    // Build right max array
    rmax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rmax[i] = Math.max(rmax[i + 1], arr[i]);
    }

    // Calculate trapped water
    let ans = 0;
    for (let i = 0; i < n; i++) {
      let cmin = Math.min(lmax[i], rmax[i]);
      if (cmin > arr[i]) {
        ans += (cmin - arr[i]);
      }
    }

    return ans;
  }
}