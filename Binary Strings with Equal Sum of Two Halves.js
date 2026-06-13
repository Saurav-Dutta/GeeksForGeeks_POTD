// User function Template for JavaScript

class Solution {
    constructor() {
        this.MOD = 1000000007n;
    }

    power(a, b) {
        let res = 1n;
        a = BigInt(a);

        while (b > 0n) {
            if (b % 2n === 1n) {
                res = (res * a) % this.MOD;
            }
            a = (a * a) % this.MOD;
            b /= 2n;
        }
        return res;
    }

    computeValue(n) {
        let fact = new Array(2 * n + 1);
        fact[0] = 1n;

        for (let i = 1; i <= 2 * n; i++) {
            fact[i] = (fact[i - 1] * BigInt(i)) % this.MOD;
        }

        let numerator = fact[2 * n];
        let denominator = (fact[n] * fact[n]) % this.MOD;

        return Number(
            (numerator * this.power(denominator, this.MOD - 2n)) % this.MOD
        );
    }
}