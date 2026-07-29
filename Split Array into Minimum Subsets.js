class Solution {
    minSubsets(arr) {
        arr.sort((a, b) => a - b);

        let ans = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + 1) ans++;
        }

        return ans;
    }
}