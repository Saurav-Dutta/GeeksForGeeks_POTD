class Solution {
    countKdivPairs(arr, k) {
        const m = new Map();

        for (let i = 0; i < arr.length; i++) {
            const rem = arr[i] % k;
            m.set(rem, (m.get(rem) || 0) + 1);
        }

        let count = 0;

        for (let i = 1; i <= Math.floor(k / 2); i++) {
            count += (m.get(k - i) || 0) * (m.get(i) || 0);
        }

        const zero = m.get(0) || 0;
        if (zero > 1) {
            count += (zero * (zero - 1)) / 2;
        }

        if (k % 2 === 0) {
            const half = m.get(k / 2) || 0;
            count -= (half * (half + 1)) / 2;
        }

        return count;
    }
}