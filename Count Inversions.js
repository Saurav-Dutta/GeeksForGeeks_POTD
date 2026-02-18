class Solution {
  inversionCount(a) {
    let n = a.length;

    // Coordinate compression
    let v = [...a];
    v.sort((x, y) => x - y);

    // Remove duplicates
    v = [...new Set(v)];

    const getId = (x) => {
      // Binary search (lower_bound equivalent)
      let low = 0, high = v.length - 1;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (v[mid] === x) return mid + 1;  // 1-based index
        else if (v[mid] < x) low = mid + 1;
        else high = mid - 1;
      }
      return low + 1;
    };

    let inv = 0;
    let maxi = 0;
    let N = v.length;

    // Fenwick Tree
    let bit = new Array(N + 1).fill(0);

    const update = (idx, val) => {
      while (idx <= N) {
        bit[idx] += val;
        idx += (idx & -idx);
      }
    };

    const query = (idx) => {
      let sum = 0;
      while (idx > 0) {
        sum += bit[idx];
        idx -= (idx & -idx);
      }
      return sum;
    };

    for (let it of a) {
      let x = getId(it);
      let curr = query(x);
      inv += maxi - curr;
      update(x, 1);
      maxi++;
    }

    return inv;
  }
}
