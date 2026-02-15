class Solution {
  findMinDiff(a, m) {
    // Sort array in ascending order
    a.sort((x, y) => x - y);

    let maxi = a[m - 1] - a[0];

    for (let i = m; i < a.length; i++) {
      let anotherMaxi = a[i] - a[i - m + 1];
      maxi = Math.min(anotherMaxi, maxi);
    }

    return maxi;
  }
}
