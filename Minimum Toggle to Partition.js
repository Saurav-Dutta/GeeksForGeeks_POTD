class Solution {
    minToggle(arr) {
        let n = arr.length;

        let pref0 = new Array(n).fill(0);
        let suff1 = new Array(n).fill(0);

        pref0[0] = (arr[0] === 1) ? 1 : 0;
        suff1[n - 1] = (arr[n - 1] === 0) ? 1 : 0;

        // Prefix count of 1s
        for (let i = 1; i < n; i++) {
            pref0[i] = pref0[i - 1] + (arr[i] === 1 ? 1 : 0);
        }

        // Suffix count of 0s
        for (let i = n - 2; i >= 0; i--) {
            suff1[i] = suff1[i + 1] + (arr[i] === 0 ? 1 : 0);
        }

        let ans = n;

        for (let i = 0; i < n - 1; i++) {
            ans = Math.min(ans, pref0[i] + suff1[i + 1]);
        }

        ans = Math.min(ans, suff1[0], pref0[n - 1]);

        return ans;
    }
}