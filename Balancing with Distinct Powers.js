class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {boolean}
     */
    balancePan(a, b) {
        // C++ 'or' becomes '||'; returns true/false instead of 0/1
        if (a <= 0 || b < 0) return false;
        if (a === 1) return true;
        
        while (b > 0) {
            let r = b % a;
            
            if (r === 0) {
                b = Math.floor(b / a);
            } else if (r === 1) {
                b = Math.floor((b - 1) / a);
            } else if (r === a - 1) {
                b = Math.floor((b + 1) / a);
            } else {
                return false;
            }
        }
        
        return true;
    }
}
