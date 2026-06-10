class Solution {
    binSearch(arr, st, en, val) {
        if (st > en) return false;

        let mid = Math.floor((st + en) / 2);

        if (arr[mid] === val) return true;

        if (arr[mid] > val) {
            return this.binSearch(arr, st, mid - 1, val);
        }

        return this.binSearch(arr, mid + 1, en, val);
    }

    binarySearchable(arr) {
        let res = 0;

        for (let it of arr) {
            if (this.binSearch(arr, 0, arr.length - 1, it)) {
                res++;
            }
        }

        return res;
    }
}