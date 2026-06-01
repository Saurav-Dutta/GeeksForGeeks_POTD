class Solution {
    findMaxProduct(arr) {
        const MOD = 1000000007n;

        if (arr.length === 1) return arr[0];

        let prod = 1n;
        let zero = 0;
        let nonZero = 0;
        let maxi = -Infinity;

        for (let x of arr) {
            if (x !== 0) {
                prod = (prod * BigInt(x)) % MOD;
                nonZero = 1;
            } else {
                zero = 1;
            }

            if (x < 0 && x > maxi) {
                maxi = x;
            }
        }

        if (!nonZero) return 0;

        if (arr.length === 2 && zero === 1 && prod < 0n) {
            return 0;
        }

        if (prod < 0n) {
            prod /= BigInt(maxi);
        }

        return Number(prod);
    }
}