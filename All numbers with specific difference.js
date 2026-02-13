class Solution {
  sumDigits(x) {
    let s = 0;

    while (x > 0) {
      s += x % 10;
      x = Math.floor(x / 10);
    }

    return s;
  }

  getCount(n, d) {
    let low = 1;
    let high = n;
    let ans = -1;

    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      let val = mid - this.sumDigits(mid);

      if (val >= d) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    if (ans === -1) return 0;

    return n - ans + 1;
  }
}
