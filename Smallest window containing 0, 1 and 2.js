class Solution {
  smallestSubstring(s) {
    let n = s.length;
    let i = 0, j = 0;
    let count = Infinity;

    let m = new Map();

    while (j < n) {
      m.set(s[j], (m.get(s[j]) || 0) + 1);

      while (m.size === 3) {
        count = Math.min(count, j - i + 1);

        m.set(s[i], m.get(s[i]) - 1);

        if (m.get(s[i]) === 0) {
          m.delete(s[i]);
        }

        i++;
      }

      j++;
    }

    return count === Infinity ? -1 : count;
  }
}