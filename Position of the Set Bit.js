class Solution {
  findPosition(n) {
    let res = -1;

    for (let i = 1; n > 0; i++, n >>= 1) {
      if (n & 1) {
        if (res === -1) {
          res = i;
        } else {
          return -1;
        }
      }
    }

    return res;
  }
}