class Solution {
  isMaxHeap(arr) {
    let n = arr.length;

    for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      // Check left child
      if (arr[i] < arr[left]) {
        return false;
      }

      // Check right child if exists
      if (right < n && arr[i] < arr[right]) {
        return false;
      }
    }

    return true;
  }
}