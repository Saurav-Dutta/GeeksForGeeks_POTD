class Solution {
    search(a, b) {
        let n = a.length;
        let m = b.length;

        if (m === 0) return [];

        // Build LPS array
        let lps = new Array(m).fill(0);

        let len = 0;
        for (let i = 1; i < m; ) {
            if (b[i] === b[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        // KMP Search
        let res = [];
        let i = 0, j = 0;

        while (i < n) {
            if (a[i] === b[j]) {
                i++;
                j++;
            }

            if (j === m) {
                res.push(i - j);
                j = lps[j - 1];
            } else if (i < n && a[i] !== b[j]) {
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }

        return res;
    }
}