class Solution {
    kSubstr(s, k) {
        const n = s.length;

        if (n % k !== 0) return false;

        const freq = new Map();
        const blocks = n / k;

        for (let i = 0; i < n; i += k) {
            const part = s.substring(i, i + k);
            freq.set(part, (freq.get(part) || 0) + 1);
        }

        let maxFreq = 0;
        for (const cnt of freq.values()) {
            maxFreq = Math.max(maxFreq, cnt);
        }

        return maxFreq >= blocks - 1;
    }
}