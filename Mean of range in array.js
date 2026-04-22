class Solution {
  findMean(arr, queries) {
    let n = arr.length;

    // Prefix sum array
    let prefSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefSum[i + 1] = prefSum[i] + arr[i];
    }

    let res = [];

    for (let q of queries) {
      let l = q[0], r = q[1];

      let sum = prefSum[r + 1] - prefSum[l];
      let len = r - l + 1;

      res.push(Math.floor(sum / len)); // integer division
    }

    return res;
  }
}