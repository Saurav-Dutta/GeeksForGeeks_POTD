class Solution {
    countSubsets(arr) {
        const MOD = 1000000007n;

        const validMask = {
            2:1, 3:2, 5:4, 6:3, 7:8, 10:5, 11:16,
            13:32, 14:9, 15:6, 17:64, 19:128, 21:10,
            22:17, 23:256, 26:33, 29:512, 30:7
        };

        const freq = new Array(31).fill(0);
        for (let x of arr) freq[x]++;

        const SIZE = 1 << 10;
        let dp = new Array(SIZE).fill(0n);
        dp[0] = 1n;

        for (let num in validMask) {
            num = Number(num);
            if (freq[num] === 0) continue;

            const mask = validMask[num];
            const f = BigInt(freq[num]);
            const ndp = dp.slice();

            for (let m = 0; m < SIZE; m++) {
                if ((m & mask) === 0) {
                    ndp[m | mask] = (ndp[m | mask] + dp[m] * f) % MOD;
                }
            }
            dp = ndp;
        }

        let ans = 0n;
        for (let m = 1; m < SIZE; m++) {
            ans = (ans + dp[m]) % MOD;
        }

        // Multiply by 2^(count of ones)
        let mul = 1n;
        let base = 2n;
        let e = BigInt(freq[1]);

        while (e > 0n) {
            if (e & 1n) mul = (mul * base) % MOD;
            base = (base * base) % MOD;
            e >>= 1n;
        }

        return Number((ans * mul) % MOD);
    }
}