class Solution {
  countSubarrays(arr) {
    let ans = 0;
    let stk = [];

    for (let i = 0; i < arr.length; i++) {
      while (stk.length > 0 && stk[stk.length - 1] > arr[i]) {
        stk.pop();
      }

      stk.push(arr[i]);
      ans += stk.length;
    }

    return ans;
  }
}