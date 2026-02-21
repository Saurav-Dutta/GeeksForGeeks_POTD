class Solution {
  check(arr, value) {
    let cnt = 0;

    for (let i of arr) {
      if (i >= value) cnt++;
    }

    return cnt >= value;
  }

  hIndex(arr) {
    let low = 0;
    let high = Math.max(...arr);
    let ans = -1;

    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (this.check(arr, mid)) {
        ans = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return ans;
  }
}