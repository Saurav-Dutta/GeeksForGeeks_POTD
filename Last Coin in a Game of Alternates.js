class Solution {
    coin(arr) {
        let s = 0;
        let e = arr.length - 1;

        while (s < e) {
            if (arr[s] > arr[e]) {
                s++;
            } else {
                e--;
            }
        }

        return arr[s];
    }
}