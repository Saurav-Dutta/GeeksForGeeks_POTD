class Solution {
  intersection(a, b) {
    let ans = [];
    let last = -1;
    let i = 0, j = 0;
    let n = a.length, m = b.length;

    while (i < n && j < m) {
      if (a[i] === b[j]) {
        if (last !== a[i]) {
          ans.push(a[i]);
          last = a[i];
        }
        i++;
        j++;
      } else if (a[i] < b[j]) {
        i++;
      } else {
        j++;
      }
    }

    return ans;
  }
}