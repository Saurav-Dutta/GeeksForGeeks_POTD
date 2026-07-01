class Solution {
    maxSumSubarray(arr) {
        let n = arr.length;

        let left = new Array(n).fill(0);
        let right = new Array(n).fill(0);

        left[0] = arr[0];
        right[n - 1] = arr[n - 1];

        let ans = Math.max(left[0], right[n - 1]);

        for (let i = 1; i < n; i++) {
            left[i] = Math.max(arr[i], arr[i] + left[i - 1]);
            ans = Math.max(ans, left[i]);
        }

        for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.max(arr[i], arr[i] + right[i + 1]);
            ans = Math.max(ans, right[i]);
        }

        for (let i = 1; i < n - 1; i++) {
            ans = Math.max(ans, left[i - 1] + right[i + 1]);
        }

        return ans;
    }
}