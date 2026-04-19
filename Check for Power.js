class Solution {
  check(l, r, x, y) {
    if (l > r) return false;

    let m = Math.floor(l + (r - l) / 2);
    let pxm = Math.pow(x, m);

    if (pxm === y) return true;

    if (pxm >= 0 && pxm < y) {
      return this.check(m + 1, r, x, y);
    }

    return this.check(l, m - 1, x, y);
  }

  isPower(x, y) {
    return this.check(0, 32, x, y);
  }
}