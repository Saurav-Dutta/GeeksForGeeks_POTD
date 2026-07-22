class Solution {
    minDeletions(arr) {
        const sorted = [];

        for (const x of arr) {
            let left = 0, right = sorted.length;

            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (sorted[mid] < x) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            if (left === sorted.length) {
                sorted.push(x);
            } else {
                sorted[left] = x;
            }
        }

        return arr.length - sorted.length;
    }
}