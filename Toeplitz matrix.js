class Solution {
  searchMatrix(v) {
    let n = v.length;
    let m = v[0].length;

    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (v[i][j] !== v[i - 1][j - 1]) {
          return false;
        }
      }
    }

    return true;
  }
}