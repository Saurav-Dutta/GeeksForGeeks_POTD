class Solution {
    /**
     * Helper method to calculate the Greatest Common Divisor (GCD)
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    /**
     * @param {number[]} arr
     * @returns {number}
     */
    sameMod(arr) {
        const n = arr.length;
        if (n <= 1) return -1; // Standard fallback if there aren't enough elements

        // Step 1: Compute the GCD of all adjacent differences
        let overallGcd = 0;
        for (let i = 1; i < n; i++) {
            let diff = Math.abs(arr[i] - arr[0]);
            overallGcd = this.gcd(overallGcd, diff);
        }

        // Step 2: If the overall GCD is 0, it means all elements are identical.
        // There are infinitely many values of k that give the same remainder, so return -1.
        if (overallGcd === 0) {
            return -1;
        }

        // Step 3: Count the total number of positive divisors of overallGcd
        let divisorCount = 0;
        for (let i = 1; i * i <= overallGcd; i++) {
            if (overallGcd % i === 0) {
                // If divisors are equal (like 2*2 = 4), count it once
                if (i * i === overallGcd) {
                    divisorCount += 1;
                } else {
                    // Otherwise, count both i and (overallGcd / i)
                    divisorCount += 2;
                }
            }
        }

        return divisorCount;
    }
}
