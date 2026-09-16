class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    dominantPairs(arr) {
        const n = arr.length;
        const mid = Math.floor(n / 2);

        // Sort the first half in ascending order in-place
        const firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
        // Sort the second half in ascending order in-place
        const secondHalf = arr.slice(mid, n).sort((a, b) => a - b);

        // Put the sorted segments back into the original array (or just use the slices directly)
        for (let i = 0; i < mid; i++) {
            arr[i] = firstHalf[i];
        }
        for (let i = mid; i < n; i++) {
            arr[i] = secondHalf[i - mid];
        }

        let l = 0;
        let r = mid;
        let count = 0;

        // Two-pointer traversal
        while (l < mid && r < n) {
            if (arr[l] >= 5 * arr[r]) {
                count += (mid - l);
                r++;
            } else {
                l++;
            }
        }

        return count;
    }
}
