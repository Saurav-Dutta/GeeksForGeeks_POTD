class Solution {
  countIncreasing(arr) {
    let ans = 0;
    let first = 0, second = 0;

    while (second < arr.length - 1) {
      if (arr[second] >= arr[second + 1]) {
        first = second + 1;
        second = second + 1;
      } else {
        second++;
        ans += second - first;
      }
    }

    return ans;
  }
}