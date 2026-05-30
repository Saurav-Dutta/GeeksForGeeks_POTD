class Solution {
    replaceElements(arr) {
        let prev = arr[0];

        for (let i = 0; i < arr.length - 1; i++) {
            let temp = arr[i];
            arr[i] = prev ^ arr[i + 1];
            prev = temp;
        }

        arr[arr.length - 1] ^= prev;
    }
}