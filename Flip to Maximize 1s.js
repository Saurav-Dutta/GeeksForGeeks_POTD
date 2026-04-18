class Solution {
  maxOnes(arr) {
    let onecount = 0;

    // Transform array: 1 -> -1, 0 -> 1
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        arr[i] = -1;
        onecount++;
      } else {
        arr[i] = 1;
      }
    }

    // Kadane's Algorithm
    let sum = 0, ans = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      ans = Math.max(ans, sum);
      if (sum < 0) sum = 0;
    }

    return onecount + ans;
  }
}