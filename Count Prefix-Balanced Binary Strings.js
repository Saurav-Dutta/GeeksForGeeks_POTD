class Solution {
    power(base, exp, mod) {
        let result = 1n;
        base = BigInt(base) % BigInt(mod);
        exp = BigInt(exp);
        mod = BigInt(mod);
        
        while (exp > 0n) {
            if (exp & 1n) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exp >>= 1n;
        }
        return result;
    }

    prefixStrings(n) {
        const MOD = 1000000007n;
        let factN = 1n;
        let fact2N = 1n;
        
        const bigN = BigInt(n);
        
        for (let i = 1n; i <= 2n * bigN; i++) {
            fact2N = (fact2N * i) % MOD;
            if (i <= bigN) {
                factN = (factN * i) % MOD;
            }
        }
        
        let inverseFactN = this.power(factN, MOD - 2n, MOD);
        let inverseNPlusOne = this.power(bigN + 1n, MOD - 2n, MOD);
        
        let answer = fact2N;
        answer = (answer * inverseFactN) % MOD;
        answer = (answer * inverseFactN) % MOD;
        answer = (answer * inverseNPlusOne) % MOD;
        
        return Number(answer);
    }
}
