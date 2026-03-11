class Solution {
  sumSubMins(arr) {
    let s = [];
    let ans = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      while (s.length > 0 && arr[i] < arr[s[s.length - 1]]) {
        let temp = s.pop();
        let left = s.length === 0 ? -1 : s[s.length - 1];

        ans += arr[temp] * (temp - left) * (i - temp);
      }
      s.push(i);
    }

    while (s.length > 0) {
      let temp = s.pop();
      let left = s.length === 0 ? -1 : s[s.length - 1];

      ans += arr[temp] * (temp - left) * (n - temp);
    }

    return ans;
  }
}