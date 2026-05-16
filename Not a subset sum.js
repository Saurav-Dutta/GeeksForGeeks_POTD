class Solution {
    findSmallest(arr) {
        // Sort array in ascending order
        arr.sort((a, b) => a - b);

        let res = 1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > res) {
                break;
            }

            res += arr[i];
        }

        return res;
    }
}