class Solution {
    divisibleByK(arr, k) {
        let n = arr.length;

        // If n > k, subset divisible by k always exists
        if (n > k) return true;

        let dp = new Array(k).fill(false);

        for (let num of arr) {
            let temp = [...dp];

            // Current number alone
            temp[num % k] = true;

            // Add current number to previous subsets
            for (let r = 0; r < k; r++) {
                if (dp[r]) {
                    temp[(r + num) % k] = true;
                }
            }

            dp = temp;

            // Found subset divisible by k
            if (dp[0]) return true;
        }

        return false;
    }
}