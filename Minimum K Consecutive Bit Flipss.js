class Solution {
  kBitFlips(arr, k) {
    let n = arr.length;
    let q = [];
    let start = 0;
    let operation = 0;

    for (let i = 0; i < n; i++) {

      // Remove expired flips logically
      if (start < q.length && i === q[start]) {
        start++;
      }

      let bit = arr[i];

      // If odd number of flips affect current position
      if ((q.length - start) % 2 === 1) {
        bit ^= 1;
      }

      if (bit === 0) {
        if (i + k > n) return -1;

        operation++;
        q.push(i + k);
      }
    }

    return operation;
  }
}