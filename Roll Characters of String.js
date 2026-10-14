class Solution {
    /**
     * @param {string} s
     * @param {number[]} roll
     * @return {string}
     */
    findRollOut(s, roll) {
        let n = s.length;
        
        // Convert the string characters to 0-indexed integers ('a' -> 0)
        let s_int = [];
        for (let i = 0; i < n; i++) {
            s_int.push(s.charCodeAt(i) - 97);
        }
        
        // Initialize an increment tracking array filled with 0s
        let inc = new Array(n).fill(0);
        for (let x of roll) {
            inc[x - 1]++;
        }
        
        // Compute the suffix sum modifications from right to left
        for (let i = n - 2; i >= 0; i--) {
            inc[i] += inc[i + 1];
        }
        
        // Apply increments and build the final character sequence
        let ans = [];
        for (let i = 0; i < n; i++) {
            let sum = (s_int[i] + inc[i]) % 26;
            ans.push(String.fromCharCode(sum + 97));
        }
        
        return ans.join('');
    }
}
