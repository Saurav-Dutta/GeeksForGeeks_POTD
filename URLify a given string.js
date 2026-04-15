class Solution {
  URLify(s) {
    let ans = "";

    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        ans += "%20";
      } else {
        ans += s[i];
      }
    }

    return ans;
  }
}