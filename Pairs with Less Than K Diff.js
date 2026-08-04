class Solution {
    countPairs(arr, k) {
        let cnt = 0;
        let i = 0, j = 1;

        arr.sort((a, b) => a - b);

        while (j < arr.length) {
            while (arr[j] - arr[i] >= k) {
                i++;
            }
            if (arr[j] - arr[i] < k) {
                cnt += (j - i);
            }
            j++;
        }

        return cnt;
    }
}