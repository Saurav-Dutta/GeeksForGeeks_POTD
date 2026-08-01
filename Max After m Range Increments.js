class Solution {
    findMax(n, a, b, k) {
        const diff = new Array(n + 1).fill(0);

        for (let i = 0; i < a.length; i++) {
            diff[a[i]] += k[i];
            if (b[i] + 1 < n) {
                diff[b[i] + 1] -= k[i];
            }
        }

        let maxVal = 0;
        let cur = 0;

        for (let i = 0; i < n; i++) {
            cur += diff[i];
            if (cur > maxVal) maxVal = cur;
        }

        return maxVal;
    }
}