class Solution {
  canAttend(arr) {
    // Sort by ending time
    arr.sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][1] > arr[i + 1][0]) {
        return false;
      }
    }

    return true;
  }
}
