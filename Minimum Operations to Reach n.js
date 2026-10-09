class Solution {
    minOperation(n) {
        let ans = 0;
        while (n > 0) {
            if (n & 1) n -= 1;
            else n = n >> 1; // Shifts bits to the right, equivalent to integer division by 2
            ans++;
        }
        return ans;
    }
}
