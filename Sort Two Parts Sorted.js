class Solution {
    mergeTwoParts(arr) {
        let n = arr.length;
        let breakPoint = -1;

        // Find the break point
        for (let i = 1; i < n; i++) {
            if (arr[i] < arr[i - 1]) {
                breakPoint = i;
                break;
            }
        }

        // Already sorted
        if (breakPoint === -1) {
            return arr;
        }

        let left = 0;
        let right = breakPoint;
        let result = [];

        // Merge both sorted parts
        while (left < breakPoint && right < n) {
            if (arr[left] <= arr[right]) {
                result.push(arr[left++]);
            } else {
                result.push(arr[right++]);
            }
        }

        // Remaining elements of the first part
        while (left < breakPoint) {
            result.push(arr[left++]);
        }

        // Remaining elements of the second part
        while (right < n) {
            result.push(arr[right++]);
        }

        // Update the original array
        for (let i = 0; i < n; i++) {
            arr[i] = result[i];
        }

        return arr;
    }
}