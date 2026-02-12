class Solution {
  isPossibleToMakeInKop(m, n, arr, k, w) {
    let prefSum = new Array(n).fill(0);
    let op = 0;

    for (let i = 0; i < n; i++) {
      if (i > 0) prefSum[i] += prefSum[i - 1];

      if (prefSum[i] + arr[i] < m) {
        let needed = m - (prefSum[i] + arr[i]);
        op += needed;

        prefSum[i] += needed;

        if (i + w < n) {
          prefSum[i + w] -= needed;
        }
      }
    }

    return op <= k;
  }

  maxMinHeight(arr, k, w) {
    let ans = -1;
    let n = arr.length;
    let maxv = Math.max(...arr);

    let s = 1;
    let e = maxv + k;

    while (s <= e) {
      let m = Math.floor(s + (e - s) / 2);

      if (this.isPossibleToMakeInKop(m, n, arr, k, w)) {
        ans = m;
        s = m + 1;
      } else {
        e = m - 1;
      }
    }

    return ans;
  }
}
