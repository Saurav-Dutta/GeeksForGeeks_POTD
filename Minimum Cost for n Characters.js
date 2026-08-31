class Solution {
    minCost(n, i, d, c) {
        // Use BigInt to handle large 64-bit integer values safely in JavaScript
        n = BigInt(n);
        i = BigInt(i);
        d = BigInt(d);
        c = BigInt(c);
        
        return this.#minCostHelper(n, i, d, c).toString(); // Convert back to string if needed for competitive programming platforms
    }

    #minCostHelper(n, i, d, c) {
        let ans = n * i; 
        
        while (n > 1n) {
            if (n % 2n === 0n) {
                let costWithDiv = c + this.#minCostHelper(n / 2n, i, d, c);
                ans = ans < costWithDiv ? ans : costWithDiv;
            } 
            else {
                let costWithSub = i + this.#minCostHelper(n - 1n, i, d, c);
                ans = ans < costWithSub ? ans : costWithSub;
                
                let costWithAdd = d + this.#minCostHelper(n + 1n, i, d, c);
                ans = ans < costWithAdd ? ans : costWithAdd;
            }
            break;
        }
        return ans;
    }
}
