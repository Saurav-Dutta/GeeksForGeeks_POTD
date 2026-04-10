class Solution {
  find3Numbers(arr) {
    let n = arr.length;
    if (n < 3) return [];

    let minPre = new Array(n);
    let maxSuff = new Array(n);

    // Build prefix minimum array
    minPre[0] = arr[0];
    for (let i = 1; i < n; i++) {
      minPre[i] = Math.min(minPre[i - 1], arr[i - 1]);
    }

    // Build suffix maximum array
    maxSuff[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      maxSuff[i] = Math.max(maxSuff[i + 1], arr[i + 1]);
    }

    // Find valid triplet
    for (let i = 1; i < n; i++) {
      if (minPre[i] < arr[i] && maxSuff[i] > arr[i]) {
        return [minPre[i], arr[i], maxSuff[i]];
      }
    }

    return [];
  }
}