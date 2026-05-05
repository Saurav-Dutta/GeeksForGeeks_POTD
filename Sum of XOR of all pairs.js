class Solution {
    sumXOR(arr) {
        let n = arr.length;
        let ans = 0;

        for (let bit = 0; bit < 32; bit++) {
            let c1 = 0;

            for (let x of arr) {
                if (x & (1 << bit)) c1++;
            }

            ans += c1 * (n - c1) * (1 << bit);
        }

        return ans;
    }
}