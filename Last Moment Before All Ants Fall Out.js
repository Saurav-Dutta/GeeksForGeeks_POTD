class Solution {
  getLastMoment(n, left, right) {
    let ans = 0;

    for (let x of left) {
      ans = Math.max(ans, x - 0);
    }

    for (let x of right) {
      ans = Math.max(ans, n - x);
    }

    return ans;
  }
}
