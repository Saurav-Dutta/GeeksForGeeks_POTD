class Solution {
    /**
     * Helper method to calculate Great Common Divisor (GCD)
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
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    pairCount(x, y) {
        if (y % x !== 0) return 0;
        
        let pro = x * y;
        let cnt = 0;
        
        for (let i = 1; i * i <= pro; i++) {
            if (pro % i === 0) {
                let a = i;
                let b = Math.floor(pro / i);
                
                // Calculate GCD and LCM
                let currentGcd = this.gcd(a, b);
                let currentLcm = Math.floor((a * b) / currentGcd);
                
                if (currentGcd === x && currentLcm === y) {
                    if (a === b) {
                        cnt += 1;
                    } else {
                        cnt += 2;
                    }
                }
            }
        }
        return cnt;
    }
}
