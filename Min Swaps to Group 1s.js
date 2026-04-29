class Solution {
  minSwaps(arr) {
    let ans = Infinity;
    let c1 = 0;

    // Count total 1s
    for (let x of arr) {
      if (x === 1) c1++;
    }

    if (c1 === 0) return -1;

    let n = arr.length;
    let c0 = 0;
    let i = 0, j = 0;

    while (j < n) {
      if (arr[j] === 0) c0++;

      // Maintain window size = c1
      if ((j - i + 1) > c1) {
        if (arr[i] === 0) c0--;
        i++;
      }

      if ((j - i + 1) === c1) {
        ans = Math.min(ans, c0);
      }

      j++;
    }

    return ans;
  }
}