class Solution {
  isPossible(a, mid, k) {
    let csum = 0;
    let painters = 1;

    for (let i = 0; i < a.length; i++) {
      if (csum + a[i] > mid) {
        csum = a[i];
        painters++;

        if (painters > k) {
          return false;
        }
      } else {
        csum += a[i];
      }
    }

    return true;
  }

  minTime(a, k) {
    let low = Math.max(...a);
    let high = a.reduce((sum, val) => sum + val, 0);
    let res = 0;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (this.isPossible(a, mid, k)) {
        res = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return res;
  }
}
