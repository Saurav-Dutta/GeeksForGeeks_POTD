class Solution {
    countSubsets(arr) {
        const MOD = 1000000007;
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

        const mask = new Array(31).fill(0);

        for (let x = 2; x <= 30; x++) {
            let cur = x;
            let bits = 0;
            let ok = true;

            for (let i = 0; i < 10; i++) {
                const p = primes[i];
                let cnt = 0;

                while (cur % p === 0) {
                    cur = Math.floor(cur / p);
                    cnt++;
                }

                if (cnt > 1) {
                    ok = false;
                    break;
                }

                if (cnt === 1) bits |= (1 << i);
            }

            mask[x] = ok ? bits : -1;
        }

        const dp = new Array(1 << 10).fill(0);
        dp[0] = 1;

        let ones = 0;

        for (const x of arr) {
            if (x === 1) {
                ones++;
                continue;
            }

            if (mask[x] === -1) continue;

            const curMask = mask[x];

            for (let m = (1 << 10) - 1; m >= 0; m--) {
                if ((m & curMask) !== 0) continue;

                dp[m | curMask] = (dp[m | curMask] + dp[m]) % MOD;
            }
        }

        let ans = 0;
        for (const ways of dp) {
            ans = (ans + ways) % MOD;
        }

        ans = (ans - 1 + MOD) % MOD;

        let mul = 1;
        while (ones-- > 0) {
            mul = (mul * 2) % MOD;
        }

        return Number((ans * mul) % MOD);
    }
}