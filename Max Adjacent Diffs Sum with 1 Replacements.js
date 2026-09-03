class Solution {
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    maxDiffSum(arr) {
        let v1 = 0;
        let v2 = 0;

        // Iterate backwards from the second to last element
        for (let i = arr.length - 2; i >= 0; i--) {
            let x = Math.max(v1, Math.abs(1 - arr[i + 1]) + v2);
            let y = Math.max(Math.abs(arr[i] - 1) + v1, Math.abs(arr[i] - arr[i + 1]) + v2);
            
            v1 = x;
            v2 = y;
        }

        return Math.max(v1, v2);
    }
}
