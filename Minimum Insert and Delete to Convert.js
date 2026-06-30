class Solution {
    minInsAndDel(a, b) {
        let n = a.length, m = b.length;

        // Store elements of b in a map
        let inB = new Map();
        for (let i = 0; i < m; i++) {
            inB.set(b[i], true);
        }

        let lis = [];

        // Binary search function (lower_bound equivalent)
        function lowerBound(arr, target) {
            let left = 0, right = arr.length;

            while (left < right) {
                let mid = Math.floor((left + right) / 2);

                if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            return left;
        }

        for (let i = 0; i < n; i++) {
            if (inB.has(a[i])) {
                let idx = lowerBound(lis, a[i]);

                if (idx === lis.length) {
                    lis.push(a[i]);
                } else {
                    lis[idx] = a[i];
                }
            }
        }

        return (n - lis.length) + (m - lis.length);
    }
}