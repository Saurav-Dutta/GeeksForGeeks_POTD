class Solution {
  good(arr, k, m) {
    let totalHours = 0;

    for (let i = 0; i < arr.length; i++) {
      totalHours += Math.ceil(arr[i] / m);
    }

    return totalHours <= k;
  }

  kokoEat(arr, k) {
    let low = 1;
    let high = Math.max(...arr);
    let ans = 0;

    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (this.good(arr, k, mid)) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return ans;
  }
}
