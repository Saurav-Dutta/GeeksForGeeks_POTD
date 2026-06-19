class Solution {
    optimalArray(arr) {
        let n = arr.length;
        
        // Prefix sum array
        let pref = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            pref[i + 1] = pref[i] + arr[i];
        }

        let ans = new Array(n);

        for (let i = 0; i < n; i++) {
            let mid = Math.floor(i / 2);
            let median = arr[mid];

            let leftCost =
                median * (mid + 1) - pref[mid + 1];

            let rightCost =
                (pref[i + 1] - pref[mid + 1]) -
                median * (i - mid);

            ans[i] = leftCost + rightCost;
        }

        return ans;
    }
}