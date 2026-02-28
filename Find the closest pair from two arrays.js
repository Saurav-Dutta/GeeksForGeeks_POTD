class Solution {
  findClosestPair(a, b, x) {
    let i = 0;
    let j = b.length - 1;

    let d = Number.MAX_SAFE_INTEGER;
    let p = 0, q = 0;

    while (i < a.length && j >= 0) {
      let s = a[i] + b[j];

      if (Math.abs(s - x) < d) {
        d = Math.abs(s - x);
        p = a[i];
        q = b[j];
      }

      if (s > x) {
        j--;
      } else {
        i++;
      }
    }

    return [p, q];
  }
}