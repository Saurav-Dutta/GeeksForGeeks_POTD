class Solution {
    /**
     * @param {bigint} n
     * @returns {bigint}
     */
    sum_of_digit(n) {
        let sum = 0n;
        while (n !== 0n) {
            sum += n % 10n;
            n /= 10n; // Integer division is handled automatically by BigInt
        }
        return sum;
    }

    /**
     * @param {string|number|bigint} N
     * @returns {string}
     */
    findMax(N) {
        // Convert input to BigInt to safe-guard against large inputs
        let BigN = BigInt(N);
        let ans = BigN;
        let max_sum = this.sum_of_digit(BigN);

        // Keep i as a BigInt
        for (let i = 1n; i <= BigN; i *= 10n) {
            let curr_num = (BigN / (i * 10n)) * (i * 10n) - 1n;
            
            if (curr_num >= 1n) {
                let curr_sum = this.sum_of_digit(curr_num);
                if (curr_sum > max_sum || (curr_sum === max_sum && curr_num > ans)) {
                    max_sum = curr_sum;
                    ans = curr_num;
                }
            }
        }
        
        // Convert to string to avoid platform output formatting bugs (like a trailing 'n')
        return ans.toString();
    }
}
