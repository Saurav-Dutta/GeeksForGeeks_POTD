class Solution {
  subarrayXor(arr, k) {
    let map = new Map();
    let xor = 0;
    let ans = 0;

    // Equivalent to m[0]++
    map.set(0, 1);

    for (let i = 0; i < arr.length; i++) {
      xor ^= arr[i];

      let needed = xor ^ k;

      if (map.has(needed)) {
        ans += map.get(needed);
      }

      map.set(xor, (map.get(xor) || 0) + 1);
    }

    return ans;
  }
}