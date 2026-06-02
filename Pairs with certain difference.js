class Solution {
    sumDiffPairs(arr, K) {
        arr.sort((a, b) => a - b);

        let sum = 0;

        for (let i = arr.length - 1; i > 0; ) {
            if (arr[i] - arr[i - 1] < K) {
                sum += arr[i] + arr[i - 1];
                i -= 2;
            } else {
                i--;
            }
        }

        return sum;
    }
}