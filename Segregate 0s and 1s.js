class Solution {
  segregate0and1(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
      if (arr[left] === 0) {
        left++;
      } else if (arr[right] === 1) {
        right--;
      } else {
        // swap
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
  }
}