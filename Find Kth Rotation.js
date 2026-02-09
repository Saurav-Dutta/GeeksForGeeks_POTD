class Solution {
  findKRotation(arr) {
    let result = 0;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        result = i + 1;
        break;
      }
    }

    return result;
  }
}
