class Solution {
    /**
     * @param {number} n
     * @param {string} s
     * @returns {number}
     */
    solve(n, s) {
        // Initialize an array of size 26 with 0s to track frequencies/states
        let freq = new Array(26).fill(0);
        let ans = 0;

        for (let i = 0; i < s.length; i++) {
            // Get the ASCII code of the character and subtract 65 ('A')
            let d_ch = s.charCodeAt(i) - 65;

            if (freq[d_ch] === 0 && n > 0) {
                n--;
                freq[d_ch]++;
            } 
            else if (freq[d_ch] === 0 && n === 0) {
                ans++;
                freq[d_ch] = -1;
            } 
            else if (freq[d_ch] === 1) {
                n++;
                freq[d_ch]--;
            }
        }

        return ans;
    }
}
