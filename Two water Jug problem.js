class Solution {
  gcd(a, b) {
    if (b === 0) return a;
    return this.gcd(b, a % b);
  }

  pour(fromCap, toCap, d) {
    let from = fromCap;
    let to = 0;
    let step = 1;

    while (from !== d && to !== d) {
      let temp = Math.min(from, toCap - to);

      to += temp;
      from -= temp;
      step++;

      if (from === d || to === d) break;

      if (from === 0) {
        from = fromCap;
        step++;
      }

      if (to === toCap) {
        to = 0;
        step++;
      }
    }

    return step;
  }

  minSteps(m, n, d) {
    if (d > Math.max(m, n)) return -1;
    if (d % this.gcd(m, n) !== 0) return -1;

    return Math.min(
      this.pour(m, n, d),
      this.pour(n, m, d)
    );
  }
}