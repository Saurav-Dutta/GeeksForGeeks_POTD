class Solution {
  longestSubstr(s, k) {
    let ans = 0;
    let n = s.length;

    for (let code = 65; code <= 90; code++) {
      let c = String.fromCharCode(code);

      let i = 0, j = 0;
      let temp = k;

      while (j < n && i <= j) {
        if (s[j] !== c && temp === 0) {
          while (s[i] === c) i++;
          i++;
          temp++;
        }

        if (s[j] !== c && temp > 0) {
          temp--;
        }

        j++;
        ans = Math.max(ans, j - i);
      }
    }

    return ans;
  }
}