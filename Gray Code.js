class Solution {
  graycode(n) {
    let result = [];
    let size = 1 << n; // 2^n

    for (let i = 0; i < size; i++) {
      let gray = i ^ (i >> 1);
      result.push(gray.toString(2).padStart(n, '0'));
    }

    return result;
  }
}