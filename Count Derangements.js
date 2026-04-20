class Solution {
  derangeCount(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1;

    for (let i = 3; i <= n; i++) {
      let c = (i - 1) * (a + b);
      a = b;
      b = c;
    }

    return b;
  }
}