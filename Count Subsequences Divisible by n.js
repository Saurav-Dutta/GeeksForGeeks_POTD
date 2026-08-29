class Solution {
    countSubsequences(s, n) {
        const MOD = 1000000007;
        let dp = new Array(n).fill(0);
        
        for (let ch of s) {
            let digit = ch.charCodeAt(0) - 48; // '0' is character code 48
            let next = [...dp];
            
            for (let remainder = 0; remainder < n; ++remainder) {
                let newRemainder = (remainder * 10 + digit) % n;
                next[newRemainder] = (next[newRemainder] + dp[remainder]) % MOD;
            }
            
            next[digit % n] = (next[digit % n] + 1) % MOD;
            
            // Simulates C++ dp.swap(next)
            [dp, next] = [next, dp];
        }
        
        return dp[0];
    }
}
