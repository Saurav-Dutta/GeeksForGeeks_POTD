class Solution {
  myAtoi(s) {
    let ans = 0;
    let sign = ' ';
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    for (let ch of s) {
      if (ch >= '0' && ch <= '9') {
        ans = ans * 10 + (ch.charCodeAt(0) - '0'.charCodeAt(0));
      } else {
        if (ans !== 0 || sign !== ' ') break;

        if (ans === 0 && sign === ' ') {
          if (ch === '-' || ch === '+') sign = ch;
          else if (ch === ' ') continue;
          else break;
        }
      }

      // Overflow handling
      if (ans > INT_MAX && sign === '-') return INT_MIN;
      if (ans > INT_MAX) return INT_MAX;
    }

    if (sign === '-') {
      return -ans;
    }
    return ans;
  }
}