class Solution {
    countT(arr, n, x) {
        let ans = 0;
        for (let i = 0; i < n - 2; i++) {
            let j = i + 1;
            let k = n - 1;
            while (j < k) {
                let sum = arr[i] + arr[j] + arr[k];
                if (sum <= x) {
                    ans += (k - j);
                    j++;
                } else {
                    k--;
                }
            }
        }
        return ans;
    }

    countTriplets(arr, l, r) {
        const n = arr.length;
        // JavaScript sorts alphabetically by default; this line ensures numerical sorting
        arr.sort((a, b) => a - b); 
        return this.countT(arr, n, r) - this.countT(arr, n, l - 1);
    }
}
