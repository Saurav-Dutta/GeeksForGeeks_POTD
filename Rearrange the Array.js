class Solution {
    static MOD = 1000000007;

    power(a, b) {
        let res = 1n;
        let base = BigInt(a) % BigInt(Solution.MOD);
        let exp = BigInt(b);
        const MOD = BigInt(Solution.MOD);

        while (exp > 0n) {
            if (exp & 1n) {
                res = (res * base) % MOD;
            }
            base = (base * base) % MOD;
            exp >>= 1n;
        }
        return res;
    }

    minOperations(b) {
        const n = b.length;
        const vis = new Array(n).fill(false);
        const cycles = [];

        for (let i = 0; i < n; i++) {
            if (!vis[i]) {
                let cur = i;
                let len = 0;
                while (!vis[cur]) {
                    vis[cur] = true;
                    cur = b[cur] - 1;
                    len++;
                }
                cycles.push(len);
            }
        }

        const primes = [];
        const isPrime = new Array(n + 1).fill(true);

        for (let i = 2; i <= n; i++) {
            if (isPrime[i]) {
                primes.push(i);
                for (let j = i * 2; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        const maxExp = new Map();

        for (const len of cycles) {
            let x = len;
            for (const p of primes) {
                if (p * p > x) break;
                if (x % p === 0) {
                    let cnt = 0;
                    while (x % p === 0) {
                        x = Math.floor(x / p);
                        cnt++;
                    }
                    maxExp.set(p, Math.max(maxExp.get(p) || 0, cnt));
                }
            }
            if (x > 1) {
                maxExp.set(x, Math.max(maxExp.get(x) || 0, 1));
            }
        }

        let ans = 1n;
        const MOD = BigInt(Solution.MOD);

        for (const [prime, exp] of maxExp.entries()) {
            ans = (ans * this.power(prime, exp)) % MOD;
        }

        return Number(ans);
    }
}