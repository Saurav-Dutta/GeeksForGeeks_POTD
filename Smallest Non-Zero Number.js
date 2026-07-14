class Solution {
    find(arr) {
        let curr = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            curr += arr[i];
            curr = Math.floor((curr + 1) / 2);
        }

        return curr;
    }
}