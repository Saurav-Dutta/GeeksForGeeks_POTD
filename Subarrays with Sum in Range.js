class Solution {
    solve(arr, x) {
        const n = arr.length;
        let count = 0;
        let sum = 0;
        let j = 0;

        for (let i = 0; i < n; i++) {
            sum += arr[i];

            while (sum > x) {
                sum -= arr[j++];
            }

            count += (i - j + 1);
        }

        return count;
    }

    countSubarray(arr, l, r) {
        return this.solve(arr, r) - this.solve(arr, l - 1);
    }
}