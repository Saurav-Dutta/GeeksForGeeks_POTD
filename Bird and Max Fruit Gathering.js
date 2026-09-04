class Solution {
    /**
     * @param {number[]} arr
     * @param {number} m
     * @return {number}
     */
    maxFruits(arr, m) {
        let ans = 0;
        const n = arr.length;
        let temp = 0;

        for (let i = 0; i < (n + m); i++) {
            if (i < m) {
                ans += arr[i];
                temp = ans;
            } else {
                temp += arr[i % n];
                temp -= arr[(i - m) % n];
                ans = Math.max(ans, temp);
            }
        }
        return ans;
    }
}
