class Solution {
    maxSubstring(s) {
        let maxSum = -Infinity;
        let currSum = 0;

        for (const ch of s) {
            currSum += (ch === '0' ? 1 : -1);
            maxSum = Math.max(maxSum, currSum);

            if (currSum < 0) {
                currSum = 0;
            }
        }

        return maxSum <= 0 ? -1 : maxSum;
    }
}