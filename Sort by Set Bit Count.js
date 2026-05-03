class Solution {
  sortBySetBitCount(arr) {
    // Helper to count set bits
    const countBits = (num) => {
      let count = 0;
      while (num > 0) {
        count += num & 1;
        num >>= 1;
      }
      return count;
    };

    // JavaScript sort is stable (modern engines)
    arr.sort((a, b) => countBits(b) - countBits(a));

    return arr;
  }
}