class Solution {
    countMinOperations(arr) {
        let ops = 0;
        let mx = 0;

        for (let x of arr) {
            ops += this.popcount(x);
            mx = Math.max(mx, x);
        }

        if (mx === 0) return 0;

        let doublings = 0;
        let p = 1;

        while ((p << 1) <= mx) {
            p <<= 1;
            doublings++;
        }

        ops += doublings;
        return ops;
    }

    popcount(x) {
        let count = 0;
        while (x > 0) {
            count += x & 1;
            x >>= 1;
        }
        return count;
    }
}