class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @return {number}
     */
    maxProduct(arr, k) {
        let n = arr.length;
        // Sort the array in ascending numerical order
        arr.sort((a, b) => a - b);

        // If the largest element is non-positive and k is odd, 
        // the product will be negative, so we pick the largest (least negative) elements.
        if (arr[n - 1] <= 0 && k % 2 === 1) {
            let ans = 1;
            for (let i = n - 1; i >= n - k; i--) {
                ans *= arr[i];
            }
            return ans;
        }

        let ans = 1;
        let left = 0;
        let right = n - 1;

        // If k is odd, include the largest element first to make remaining k even
        if (k % 2 === 1) {
            ans *= arr[right];
            right--;
            k--;
        }

        // Process elements in pairs
        while (k > 0) {
            let leftProduct = arr[left] * arr[left + 1];
            let rightProduct = arr[right] * arr[right - 1];

            if (leftProduct > rightProduct) {
                ans *= leftProduct;
                left += 2;
            } else {
                ans *= rightProduct;
                right -= 2;
            }
            k -= 2;
        }

        return ans;
    }
}
