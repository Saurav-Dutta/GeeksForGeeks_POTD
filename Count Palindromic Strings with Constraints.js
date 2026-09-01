class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    palindromicStrings(n, k) {
        const MOD = 1000000007n;
        let totalCount = 0n;

        // Iterate through all possible lengths from 1 up to n
        for (let len = 1; len <= n; len++) {
            let m = Math.floor(len / 2);

            // Constraint: If we need more unique character pairs than available, it's impossible
            if (m > k) continue;

            // Step 1: Calculate Permutation P(k, m) using BigInt to prevent overflow
            let perm = 1n;
            for (let i = 0; i < m; i++) {
                perm = (perm * BigInt(k - i)) % MOD;
            }

            // Step 2: Account for the center character if the length is odd
            if (len % 2 !== 0) {
                // Number of remaining unused characters is (k - m)
                let remaining = k - m;
                if (remaining <= 0) continue; // No characters left for the center
                
                perm = (perm * BigInt(remaining)) % MOD;
            }

            totalCount = (totalCount + perm) % MOD;
        }

        return Number(totalCount);
    }
}
